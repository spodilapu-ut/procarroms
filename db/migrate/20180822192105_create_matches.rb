class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.references :team_one
      t.references :team_two
      t.references :toss

      t.timestamps
    end
  end
end
