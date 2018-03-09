pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'ng build --progress false --prod --aot --build-optimizer'
        sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
      }
    }
  }
}