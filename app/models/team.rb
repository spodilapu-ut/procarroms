class Team < ApplicationRecord
  has_many :team_ones, :class_name => 'Match', :foreign_key => 'team_one_id'
  has_many :team_twos, :class_name => 'Match', :foreign_key => 'team_two_id'
  has_many :tosses, :class_name => 'Match', :foreign_key => 'toss_id'
  has_many :members
  has_many :scores
end
