pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        sh 'sudo apt install npm nodejs'
        sh 'sudo npm i -g @angular/cli yarn'
        sh 'yarn install'
        sh 'ng build --prod --build-optimizer'
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
