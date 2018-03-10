pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build on Prod') {
          steps {
            build 'gdz-prod-build'
          }
        }
        stage('Build on Jenkins') {
          steps {
            sh 'yarn install; ng build --prod --build-optimizer'
          }
        }
      }
    }
    stage('Test') {
      steps {
        echo 'Still Implementing'
        sh 'CHROME_BIN=/usr/bin/chromium-browser ng test --browsers=ChromeHeadless --single-run --progress=false --watch=false'
        junit(testResults: '**/test-results.xml', allowEmptyResults: true)
      }
    }
    stage('Deploy') {
      steps {
        build 'gdz-prod-deploy'
      }
    }
  }
}