class ScoresController < ApplicationController
  before_action :set_match
  before_action :set_score, only: [:show, :edit, :update, :destroy]

  # GET /scores
  # GET /scores.json
  def index
    # @scores = Score.where("match_id = ?", params[:match_id])
    @scores = @match.scores
    @total = Hash.new
    @total.store(@match.team_one.name, (Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_one_id).sum(:score)))
    @total.store(@match.team_two.name, (Score.where("match_id = (?)", @match.id).where("team_id = (?)", @match.team_two_id).sum(:score)))
  end

  # GET /scores/1
  # GET /scores/1.json
  def show
  end

  # GET /scores/new
  def new
    #@score = Score.new
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
    @score = @match.scores.build(score_params)
    respond_to do |format|
    if @score.save
      format.html { redirect_to match_score_path(@match, @score), notice: 'Score was successfully created.' }
      format.json { render :show, status: :created, location: @score }
    else
      format.html { render :new }
      format.json { render json: @score.errors, status: :unprocessable_entity }
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
end
