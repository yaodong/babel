class CreateSnippets < ActiveRecord::Migration[6.1]
  def change
    create_table :snippets do |t|
      t.references :user, null: false, foreign_key: true
      t.string :language
      t.text :content

      t.timestamps
    end
  end
end
