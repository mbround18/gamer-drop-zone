pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        sh '''ng build --prod --build-optimizer
'''
      }
    }
    stage('Test') {
      agent any
      steps {
        echo 'No test enables'
      }
    }
  }
}