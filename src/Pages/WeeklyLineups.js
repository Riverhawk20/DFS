import "antd/dist/antd.css";
import Grid from "antd/lib/card/Grid";
import Layout from "antd/lib/layout/layout";
import "../Styles/WeeklyLineup.css";

import MatchupPreviewLine from "../Components/MatchupArticlePreview";
function WeeklyLineups() {
  return (
    <div>
      <Layout>
        <Grid className="gridStyle">
          <MatchupPreviewLine
            isMain={true}
            header="NFL DFS for Week 15: Optimal DraftKings, Fan Duel daily Picks, Stacks, and More"
          />
          <MatchupPreviewLine
            team1="titans"
            team2="vikings"
            header="Week 15 NFL DFS: Monday Night Football Showdown Slate - Titans vs. Vikings"
          />
        </Grid>
      </Layout>
    </div>
  );
}

export default WeeklyLineups;
