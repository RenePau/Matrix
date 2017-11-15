#!/usr/bin/env groovy 
node {
    stage('PreBuild') {
        echo 'PreBuilding....'
        sh 'npm install'
    }
    stage('Build') {
        echo 'Building....'
        sh 'ng build'
    }
    stage('Test') {
        echo 'Testing....'
        sh 'ng test'
    }
    stage('Deploy') {
        echo 'Deploying....'
        //sh deploy
    }
    
}
