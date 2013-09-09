include_recipe "database"

connection_info = {
  :host => 'localhost',
  :username => 'postgres',
  :password => node['postgresql']['password']['postgres_unhashed']
}

postgresql_database_user 'frank' do
  connection connection_info
  password 'password'
  database_name 'frank'
  action :create
end

postgresql_database 'frank' do
  connection connection_info
  action :create
end

postgresql_database_user 'frank' do
  connection connection_info
  database_name 'frank'
  action :grant
end

# import an sql dump from your app_root/data/dump.sql to the my_database database
# execute "import" do
  # command "mysql -u root -p\"#{node['mysql']['server_root_password']}\" my_database < /srv/site/data/dump.sql"
  # action :run
# end
