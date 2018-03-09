node {
  stage('Checkout') {
      checkout scm
  }
  stage('Build') {
    steps {
      sh 'npm install'
      sh 'ng build --progress false --prod --aot'
      sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
    }
    archive 'dist.tar.gz'
  }
  stage('Test') {
    steps {
      sh '#ng test --progress false --watch false'
      sh 'echo "nope"'
    }
    junit '**/test-results.xml'
  }
}
