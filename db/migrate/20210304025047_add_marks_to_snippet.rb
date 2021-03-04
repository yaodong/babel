class AddMarksToSnippet < ActiveRecord::Migration[6.1]
  def change
    add_column :snippets, :marks, :jsonb
  end
end
