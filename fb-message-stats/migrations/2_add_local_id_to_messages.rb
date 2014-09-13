Sequel.migration do
  change do
    alter_table(:messages) do
      add_column :local_id, Integer
    end
  end
end