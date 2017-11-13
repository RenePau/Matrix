#!/usr/bin/env groovy 
//Jenkinsfile (Declarative Pipeline) 3. Changed in VSCode
// node 6.10.1
// npm 3.10.10
// agent { docker 'node:6.10.1' }
// stage('build') {
//            steps {
//                cmd 'npm --version'
//            }
//        }

pipeline {
    agent { label 'master' }
    stages {
        stage('testing A1') {
            steps {
                sh 'echo hello from master node'
            }
        }
    }
}
