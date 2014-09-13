Sequel.migration do
  change do
    create_table(:messages) do
      primary_key :id
      String :from, :null=>false
      String :message, :null=>false, :text => true
      DateTime :created_time, :null=>false
    end
  end
end