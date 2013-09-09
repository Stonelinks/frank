Vagrant::Config.run do |config|

  config.vm.box = "precise64"
  
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.host_name = 'frank-dev-box'
  
  config.vm.share_folder ".", "/home/vagrant/frank", "."

  # Uncomment the following line to allow for symlinks
  # in the app folder. This will not work on Windows, and will
  # not work with Vagrant providers other than VirtualBox
  # config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/frank-server", "1"]
  
  config.vm.forward_port 5432, 54322
  config.vm.forward_port 5000, 5000
  
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["site-cookbooks", "cookbooks"]
    
    chef.add_recipe "apt"
    chef.add_recipe "nodejs"

    chef.add_recipe "postgresql::server"
    chef.add_recipe "postgresql::ruby"
    chef.add_recipe "database::setup"

    chef.json = {
      :development => true,
      :nodejs => {
        :version => "0.10.17"
        # , "from_source" => true
      },
      :postgresql => {
        :version  => "9.1",
        :port  => 5432,
        :pg_hba => [
          {
            # host all all 0.0.0.0/0 md5
            :type => 'host',
            :db => 'all',
            :user => 'all',
            :addr => '0.0.0.0/0',
            :method => 'md5'
          },
          {
            # host all all ::1/0 md5
            :type => 'host',
            :db => 'all',
            :user => 'all',
            :addr => '::1/0',
            :method => 'md5'
          }
        ],
        :password => {
          
          :postgres_unhashed => 'password',
          :postgres => 'md532e12f215ba27cb750c9e093ce4b5127'
        }
      }
    }
  end
  
  # install foreman
  # there has got to be a better way of doing this...
  config.vm.provision "shell" do |s|
    s.inline = "sudo bash -c '/opt/vagrant_ruby/bin/gem install foreman'"
  end

end
