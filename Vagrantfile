Vagrant::Config.run do |config|
  config.vm.box = "precise64"
  
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.forward_port 3000, 3000

  config.vm.share_folder "frank-server", "/home/vagrant/frank-server", "frank-server"
  config.vm.share_folder "node_modules", "/home/vagrant/node_modules", "node_modules"

  # Uncomment the following line to allow for symlinks
  # in the app folder. This will not work on Windows, and will
  # not work with Vagrant providers other than VirtualBox
  config.vm.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/app", "1"]

  config.vm.provision :chef_solo do |chef|
    chef.add_recipe "nodejs"
    chef.json = {
      "nodejs" => {
        "version" => "0.10.17"
        # , "from_source" => true
      }
    }
  end
end
