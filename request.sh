#!/bin/sh
#参数信息可以参见deploy-jenkins.js
JENKINS_API_TOKEN='xx'
JENKINS_USER='xx'
JENKINS_API_TEST='http://xx.domain/job/xx/buildWithParameters'
token='xx'
xx='xx'
echo "Going to send jenkins"
curl -v -X POST "$JENKINS_API_TEST?token=$token&xx=$xx" --user "$JENKINS_USER:$JENKINS_API_TOKEN"
echo "-----------send jenkins end------"
