#!/bin/bash

NAME="anctradate"                                  
DJANGODIR=/home/dexo/anctradate                
SOCKFILE=/home/dexo/django_REST_env/run/gunicorn.sock  
USER=dexo                                      
GROUP=dexo                                      
NUM_WORKERS=3                                      
DJANGO_SETTINGS_MODULE=anctradate.settings          
DJANGO_WSGI_MODULE=anctradate.wsgi                  
echo "Starting $NAME as `whoami`"


cd $DJANGODIR
source /home/dexo/django_REST_env/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist

RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR

exec gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --user=$USER --group=$GROUP \
  --bind=unix:$SOCKFILE \
  --log-level=debug \
  --log-file=-