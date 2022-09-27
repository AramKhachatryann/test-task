import { useForm } from "react-hook-form";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../redux/thunks/getUserThunk";
import { userSelector } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const body = {
      email: data.login,
      password: data.password,
    };
    dispatch(getUserThunk(body));
  };

  useEffect(() => {
    if (user) {
      navigate("../objective");
    }
  }, [user]);

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <label>
          <input
            {...register("login", {
              required: "*Field is required",
              minLength: {
                value: 3,
                message: "*Minimum 3 characters for LOGIN!",
              },
            })}
            type="text"
            placeholder="login"
          />
          <div>{errors?.login?.type}</div>
        </label>

        <label>
          <input
            {...register("password", {
              required: "*Field is required",
              minLength: {
                value: 6,
                message: "*Minimum 3 characters for LOGIN!",
              },
            })}
            type="password"
            placeholder="password"
          />
          <div>{errors?.password?.type}</div>
        </label>
        <button type="submit"> SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;
