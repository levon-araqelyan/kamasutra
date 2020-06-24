import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Button";
import s from "./Pagination.module.scss"

function Pagination(props) {
  const { pageSize, totalCount, pageButtons, page } = props;
  const butons = [];
  const totalAmount = Math.ceil(totalCount / pageSize)

  if (totalAmount >= 7) {
    if (page > 1) {
      butons.push(
        <Button onClick={pageButtons} value={1} key={1} type="button">
          {1}
        </Button>
      );
    }
    if (page > 3) {
      butons.push(
        <Button onClick={pageButtons} value={page - 2} key="...1" type="button">
          ...
        </Button>
      );
    }
    if (page >= 3) {
      butons.push(
        <Button onClick={pageButtons} value={page - 1} key={page - 1} type="button">
          {page - 1}
        </Button>
      );
    }
    butons.push(
      <Button onClick={pageButtons} value={page} key={page} style={{ color: "red" }} type="button">
        {page}
      </Button>
    );
    if (totalAmount - page >= 1) {
      butons.push(
        <Button onClick={pageButtons} key={+page + 1} value={+page + 1} type="button">
          {+page + 1}
        </Button>
      );
    }
    if (totalAmount - page > 2) {
      butons.push(
        <Button onClick={pageButtons} key="...2" value={+page + 2} type="button">
          ...
        </Button>
      );
    }
    if (page < totalAmount - 1) {
      butons.push(
        <Button onClick={pageButtons} key={totalAmount} value={totalAmount} type="button">
          {totalAmount}
        </Button>
      );
    }
  } else {
    for (let i = 1; i < totalAmount + 1; i++) {
      let styleFlag = {};
      if (i === page) {
        styleFlag = {
          color: "red"
        };
      }
      butons.push(
        <Button onClick={pageButtons} key={i} value={i} style={styleFlag} type="button">
          {i}
        </Button>
      );
    }
  }

  return (
    <React.Fragment>
      <div className={s.buttonsWrap}>{butons}</div>
    </React.Fragment>
  );
}

Pagination.propTypes = {
  users: PropTypes.object.isRequired,
  repos: PropTypes.object.isRequired,
  flags: PropTypes.bool.isRequired,
  pageButtons: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default Pagination;
