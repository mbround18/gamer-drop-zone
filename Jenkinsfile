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
        sh '''CHROME_BIN=/usr/bin/chromium-browser ng e2e  --watch=false --progress=false
'''
        junit(testResults: 'e2e/output/junitresults-**.xml', allowEmptyResults: true)
      }
    }
    stage('Deploy') {
      steps {
        build 'gdz-prod-deploy'
      }
    }
  }
}