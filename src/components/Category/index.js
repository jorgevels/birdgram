import React, { useContext } from "react";
import { Link, Image, LoaderCategory } from "./styles";
import { Context } from "../../Context";
import { Loading } from "../Loading";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
  isLoading = false
}) => {
  const { isLoadingCategories } = useContext(Context);

  return (
    <Link to={path}>
      {isLoadingCategories ? <Loading /> : <Image src={cover} />}
    </Link>
  );
};
