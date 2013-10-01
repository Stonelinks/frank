class must-have {
  include apt

  apt::ppa { "ppa:chris-lea/node.js": }

  exec { 'apt-get update':
    command => '/usr/bin/apt-get update',
    before => Apt::Ppa["ppa:chris-lea/node.js"],
  }

  exec { 'apt-get update 2':
    command => '/usr/bin/apt-get update',
    require => Apt::Ppa["ppa:chris-lea/node.js"],
  }

  exec { 'install gem compass':
    command => '/opt/ruby/bin/gem install compass',
    creates => "/opt/ruby/bin/compass",
    require => Exec["apt-get update 2"],
  }

  exec { 'install gem sass':
    command => '/opt/ruby/bin/gem install sass',
    creates => "/opt/ruby/bin/sass",
    require => Exec["apt-get update 2"],
  }

  exec { 'install npm deps':
    command => '/usr/bin/npm install -g yo grunt-cli bower mocha-phantomjs phantomjs',
    creates => [
      '/usr/lib/node_modules/bower/bin/bower',
      '/usr/lib/node_modules/yo/bin/yo',
      '/usr/lib/node_modules/grunt-cli/bin/grunt',
      '/usr/lib/node_modules/mocha-phantomjs/bin/mocha-phantomjs',
      '/usr/lib/node_modules/phantomjs/bin/phantomjs'
    ],
    require => [ Exec["apt-get update 2"], Package["nodejs"] ],
  }

  package {["build-essential", "bash", "mongodb", "nodejs", "git-core", "fontconfig"]:
    ensure => present,
    require => Exec["apt-get update 2"],
  }
}

include must-have
