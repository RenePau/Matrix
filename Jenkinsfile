#!/usr/bin/env groovy 
//Jenkinsfile (Declarative Pipeline) 3. Changed in VSCode
// node 6.10.1
// npm 3.10.10

pipeline {
    agent { docker 'node:6.10.1' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
