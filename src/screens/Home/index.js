import styles from "./Home.module.scss";

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Container, Header } from "semantic-ui-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { clearUserData } from "../../actions/userData";

import data from "../../mocks/data.json";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

CustomizedAxisTick.propTypes = {
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  payload: PropTypes.shape({
    value: PropTypes.string,
  }),
};

CustomizedAxisTick.defaultProps = {
  x: "",
  y: "",
  payload: {},
};

const Home = (props) => {
  const { userData, clearUserData } = props;

  return (
    <Container className={styles.container}>
      <Header as="h2">
        {userData && userData.username ? userData.username : ""}
      </Header>
      <div className={styles.rechartWr}>
        <Header as="h4" className={styles.h4}>
          Patients 2022
        </Header>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={80}
            height={50}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 65,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" interval={0} tick={<CustomizedAxisTick />} />
            <YAxis dataKey="value" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4D4DB4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Button className={styles.btn} onClick={clearUserData}>
        Sign out
      </Button>
    </Container>
  );
};

Home.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string,
  }),
  clearUserData: PropTypes.func,
};

Home.defaultProps = {
  userData: {},
  clearUserData: () => {},
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    clearUserData: () => dispatch(clearUserData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
