#!/usr/bin/env groovy 
node {
    stage('Build') {
        echo 'Building....'
        // Create virtualenv
        //sh 'echo "hi"'
        sh 'npm install'
        //sh 'ng build'
    }
    stage('Test') {
        echo 'Testing....'
        //sh 'ng test'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
    stage('TestJenkins'){
        echo 'TestJenkins....'
        sh 'echo "test-jenkins"'
    }
}
