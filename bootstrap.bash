#!/bin/bash

# setup database
sudo -u postgres psql --command "CREATE ROLE frank PASSWORD 'md532e12f215ba27cb750c9e093ce4b5127' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;"
createdb --host localhost --username frank --encoding UTF-8 frank
