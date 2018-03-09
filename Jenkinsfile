pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build 'gdz-prod-build'
      }
    }
    stage('Test') {
      steps {
        echo 'Still Implementing'
      }
    }
    stage('Deploy') {
      steps {
        build 'gdz-prod-deploy'
      }
    }
  }
}