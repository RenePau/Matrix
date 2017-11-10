#!/usr/bin/env groovy 
//Jenkinsfile (Declarative Pipeline) Changed in VSCode
// Comment only as test

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
