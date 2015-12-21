Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "10.10.10.99"

    if Vagrant.has_plugin? ('omnibus')
        config.omnibus.chef_version = 'latest'
    end

    config.berkshelf.enabled = true
    config.vm.provision "chef_zero" do |chef|
        chef.add_recipe "ping-server"
    end
    config.vm.provision "shell", inline: "cp /vagrant/ping.conf /etc/init/ && start ping"
end
