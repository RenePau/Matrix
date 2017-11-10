#!/usr/bin/env groovy 
//Jenkinsfile (Declarative Pipeline)

pipeline {
    agent { docker 'maven:3.3.3' }
    stages {
        stage('build') {
            steps {
                dir('C:\\Users\\renep\\Documents\\Angular\\matrix') {
                    // some block
                    fileExists 'C:\\Users\\renep\\Documents\\Angular\\matrix\'\\debug.log'
                }
                sh 'mvn --version'
            }
        }
    }
}
