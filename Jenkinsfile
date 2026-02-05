pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  environment {
    DEPLOY_DIR = "/usr/share/nginx/html"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy to Nginx') {
      steps {
        sh '''
        sudo rm -rf $DEPLOY_DIR/*
        sudo cp -r dist/* $DEPLOY_DIR/
        '''
      }
    }
  }
}
