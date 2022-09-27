import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getObjectivesThunk } from "../../redux/thunks/getObjectivesThunks";
import { objectiveSelector } from "../../redux/slices/objectiveSlice";

const Objective = () => {
  const dispatch = useDispatch();
  const objective = useSelector(objectiveSelector);

  useEffect(() => {
    dispatch(getObjectivesThunk());
  }, []);

  return (
    <div>
        <h1>objectives</h1>
      <div>
        {objective?.results?.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Objective;
