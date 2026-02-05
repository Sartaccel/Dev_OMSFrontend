pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh '''
          node -v
          npm -v
          npm install
        '''
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
          sudo rm -rf /usr/share/nginx/html/*
          sudo cp -r dist/* /usr/share/nginx/html/
          sudo systemctl restart nginx
        '''
      }
    }
  }
}
