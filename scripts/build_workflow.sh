#!/usr/bin/env bash

set -o allexport

CODELAB_SOURCE_FOLDER="./codelab-src"
CODELAB_OUTPUT_FOLDER="./codelabs"

echo -e ""
echo -e "***************************"
echo -e "SETTING UP ENVIRONMENT"
echo -e "***************************"

if [ -d "./$CODELAB_OUTPUT_FOLDER" ] ; then
    #echo "Removing Old Codelab Output Folder - $CODELAB_OUTPUT_FOLDER"
    rm -Rf $CODELAB_OUTPUT_FOLDER
    
    echo -e "Creating New Codelab Output Folder - $CODELAB_OUTPUT_FOLDER"
    mkdir -p $CODELAB_OUTPUT_FOLDER
fi

echo -e ""

#if [ -d "./$CODELAB_SOURCE_FOLDER" ] ; then
    #echo -e "Removing Old Codelab Source Folder - $CODELAB_SOURCE_FOLDER"
    #rm -Rf $CODELAB_SOURCE_FOLDER
#fi

#if [ -f "./scripts/.env" ] ; then
#	source ./scripts/.env
#fi

if [ -z $CODELAB_SERVER ]
then
	echo -e ""
	echo -e "**********************"
	echo -e "WARNING"
	echo -e "**********************"
	echo -e "CODELAB_SERVER variable is empty. You won't be able to publish the website unless you define this variable."
	echo -e "export CODELAB_SERVER=[username]@[host]"
	echo -e ""
	echo -e "Trying .env file"
	echo -e "**********************"
fi

echo -e ""
echo -e "***************************"
echo -e "CHECKING OUT SOURCE FOLDER"
echo -e "***************************"

if [ -d $CODELAB_SOURCE_FOLDER ] 
then
    echo "$CODELAB_SOURCE_FOLDER exists. Pulling newest data" 
    cd $CODELAB_SOURCE_FOLDER
    git pull --ff-only
    cd ..
else
    echo -e "Creating New Codelab Source Folder - $CODELAB_SOURCE_FOLDER"
    mkdir -p $CODELAB_SOURCE_FOLDER

    echo "Error: $CODELAB_SOURCE_FOLDER does not exists. Cloning from source"
    git clone git@github.com:ucl-casa-ce/workshops.git $CODELAB_SOURCE_FOLDER
fi

echo -e ""
echo -e "**********************"
echo -e "BUILDING ALL CODELABS"
echo -e "**********************"

find $CODELAB_SOURCE_FOLDER -name '*.md' > /tmp/mdFiles.dat

while read FILE
do
	FILENAME=$(basename $FILE)
	if [ $FILENAME != "README.md" ] 
	then
		claat export -o "$CODELAB_OUTPUT_FOLDER" $FILE
	fi
done <  /tmp/mdFiles.dat

echo -e ""
echo -e "**********************"
echo -e "CLEANING UP"
echo -e "**********************"
echo -e "Deleting temp files."
rm /tmp/mdFiles.dat

echo -e ""
echo -e "**********************"
echo -e "BUILDING SITE"
echo -e "**********************"
echo -e "Building Website Site with new codelabs / workshops."
gulp dist --codelabs-dir=./codelabs


echo -e ""
echo -e "**********************"
echo -e "TEST BEFORE PUBLISH"
echo -e "**********************"
echo -e "Build the site by running: \tgulp dist --codelabs-dir=$CODELAB_OUTPUT_FOLDER"
echo -e "Test the site by running: \tgulp serve:dist --codelabs-dir=$CODELAB_OUTPUT_FOLDER"
echo -e "Publish site by running: \tgulp publish:CASA:site"
echo -e "Publish codelabs by running: \tgulp publish:CASA:codelabs"
echo -e ""
echo -e ""

echo -e "Pushing to Path with RSync"
echo -e "*****************************"

# After build sync directorys
rsync -a /home/sjg/github_push/scripts/workshops-site/dist/ /var/www/workshops.cetools.org/
rm /var/www/workshops.cetools.org/codelabs
rsync -a /home/sjg/github_push/scripts/workshops-site/codelabs/ /var/www/workshops.cetools.org/codelabs/

echo -e "Finished Push to Server Folder"

set +o allexport

