import {
  useLocation,
  useNavigate,
  useParams,
  Location,
  NavigateFunction,
} from "react-router-dom";
import { ComponentType } from "react";

interface RouterProps {
  location: Location;
  navigate: NavigateFunction;
  params: Record<string, string | undefined>;
}

function withRouter<P extends object>(
  Component: ComponentType<P & { router: RouterProps }>
) {
  function ComponentWithRouterProp(props: P) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
