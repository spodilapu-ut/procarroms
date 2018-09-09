class ScoresController < ApplicationController
  before_action :set_match
  before_action :set_score, only: [:show, :edit, :update, :destroy]
  before_action :set_total_score

  # GET /scores
  # GET /scores.json
  def index
    # @scores = Score.where("match_id = ?", params[:match_id])
    #@scores = @match.scores
    @set_scores = {}
    @sets = {}

    @set_scores[@match.team_one.id] ||= {}
    @set_scores[@match.team_two.id] ||= {}

    @scores = Score.where("match_id = (?)", params[:match_id]).order(id: :desc)
    set_id = @scores.length
    @scores.each do |score|
      @set_scores.each do |team_id, value|
        @set_scores[team_id][set_id] ||= {}
        if(team_id == score.team_id)
          @set_scores[team_id][set_id] = score.score
        else
          @set_scores[team_id][set_id] = 0
        end
      end
      set_id -= 1
    end
    puts @scores.inspect
    puts @set_scores.inspect

    @set_scores.each do |team_id, a|
      x =  Hash[a.to_a.reverse]
      x.each do |set_no, set_score|
        @sets[team_id] ||= {}
        @sets[team_id][set_no] ||= []
        if(set_no == 1)
          @sets[team_id][set_no] = set_score
        else
          @sets[team_id][set_no] = @sets[team_id][set_no-1] + set_score
        end
      end
    end

    @total = Hash.new
    @total.store(@match.team_one.name, (Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_one_id).sum(:score)))
    @total.store(@match.team_two.name, (Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_two_id).sum(:score)))

    @members_team_one = Member.where("team_id = (?)", @match.team_one.id)
    @members_team_two = Member.where("team_id = (?)", @match.team_two.id)
  end

  # GET /scores/1
  # GET /scores/1.json
  def show
  end

  # GET /scores/new
  def new
    @old_score = @match.scores.last
    @score = @match.scores.build
    if @old_score.present?
      @new_set = @old_score.set + 1
    else
      @new_set = 1
    end
  end

  # GET /scores/1/edit
  def edit
  end

  # POST /scores
  # POST /scores.json
  def create
    @total = Hash.new
    @total.store(@match.team_one.id, Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_one.id).sum(:score))
    @total.store(@match.team_two.id, Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_two.id).sum(:score))

    @score = @match.scores.build(score_params)
    @total.each do |key, value|
      if key == @score.team_id
        if value + @score.score > 29
          respond_to do |format|
            format.html { redirect_to match_scores_path, notice: 'Score Cannot be more than 29.' }
            format.json { render :show, status: :created, location: @score }
          end
        else
          respond_to do |format|
            if @score.save
              format.html { redirect_to match_scores_path, notice: 'Score was successfully created.' }
              format.json { render :show, status: :created, location: @score }
            else
              format.html { render :new }
              format.json { render json: @score.errors, status: :unprocessable_entity }
            end
          end
        end
      end
    end
  end

  # PATCH/PUT /scores/1
  # PATCH/PUT /scores/1.json
  def update
    respond_to do |format|
      if @score.update(score_params)
        format.html { redirect_to match_scores_path(@match, @score), notice: 'Score was successfully updated.' }
        format.json { render :show, status: :ok, location: @score }
      else
        format.html { render :edit }
        format.json { render json: @score.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /scores/1
  # DELETE /scores/1.json
  def destroy
    @score.destroy
    respond_to do |format|
      format.html { redirect_to match_scores_url(@match), notice: 'Score was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = @match.scores.find(params[:id])
    end

    def set_match
      @match = Match.find(params[:match_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def score_params
      params.require(:score).permit(:set, :score, :team_id)
    end

    def set_total_score
      @sum_team_one = Score.where("team_id = (?)", @match.team_one.id).where("match_id = (?)", @match.id).sum(:score)
      @sum_team_two = Score.where("team_id = (?)", @match.team_two.id).where("match_id = (?)", @match.id).sum(:score)
    end
end
