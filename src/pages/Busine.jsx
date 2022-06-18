import { MyContext } from "../MyContext";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Business from "../components/business/Business";
import { addBusiness } from "../redux/business/business.actions";
import { useDispatch } from "react-redux";
import "./Business.scss";

const Busine = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    reset();
    dispatch(addBusiness(formData));
  };
  const { t, changeLanguage } = useContext(MyContext);

  return (
    <div className="home">
    <h1 className="h1one">Añade información de empresa para seguirme</h1>
      <div className="cardi">
        <h3>
          {t("title")}{" "}
          <button
            className="button"
            onClick={() => {
              changeLanguage("es");
            }}
          >
            {t("lang_es")}
          </button>{" "}
          <button
            className="button"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            {t("lang_en")}
          </button>
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span>{t("busine")}</span>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Please, enter a name",
                pattern: {
                  value: /^[a-zA-Z]{4,10}$/,
                  message: "Please enter a valid name",
                },
              })}
            />

            {errors.name && errors.name.type === "required" && (
              <span>{errors.name.message}</span>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <span>{errors.name.message}</span>
            )}
          </div>
          <div>
            <span>{t("yearfundation")}</span>
            <input
              type="text"
              name="date"
              {...register("date", {
                pattern: {
                  value: /^(19[0-9]\d|20[0-2]\d)$/,
                  message: "Please enter a valid date",
                },
              })}
            />
            {errors.date && errors.date.type === "pattern" && (
              <span>{errors.date.message}</span>
            )}
          </div>
          <div>
            <span>{t("place")}</span>
            <input type="text" name="where" {...register("where")} />
          </div>
          <div>
            <span>{t("mail")}</span>
            <input
              type="text"
              name="description"
              {...register("description")}
            />
          </div>
          <button className="button">{t("add")}</button>
        </form>
      </div>
      <div className="card">
        <Business />
      </div>
    </div>
  );
};

export default Busine;
