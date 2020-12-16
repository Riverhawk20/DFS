import { Col, Divider, Image, Row } from "antd";
import "antd/dist/antd.css";
import Grid from "antd/lib/card/Grid";
import "../Styles/MatchupArticlePreview.css";

function MatchupArticlePreview(props) {
  const team1Capitalized =
    props.team1?.charAt(0).toUpperCase() + props.team1?.slice(1);
  const team2Capitalized =
    props.team2?.charAt(0).toUpperCase() + props.team2?.slice(1);
  const logoColumn = props.isMain ? (
    <Image src={`../Logos/nfl.png`} />
  ) : (
    <div>
      <Image src={`../Logos/${props.team1}.png`} />
      <Image src={`../Logos/${props.team2}.png`} />
    </div>
  );

  return (
    <Row span={24} className="rowStyle">
      <Col span={6}>{logoColumn}</Col>
      <Col span={18}>
        <h3 className="PreviewHeader">{props.header}</h3>
      </Col>
    </Row>
  );
}

export default MatchupArticlePreview;
