Sequel.migration do
  change do
    alter_table(:messages) do
      add_column :facebook_id, String
    end
  end
end