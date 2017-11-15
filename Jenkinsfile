#!/usr/bin/env groovy 
node {
    stage('PreBuild') {
        echo 'PreBuilding....'
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/RenePau/Matrix.git']]])
        sh 'npm install'
    }
    stage('Build') {
        echo 'Building....'
        sh 'ng '
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
