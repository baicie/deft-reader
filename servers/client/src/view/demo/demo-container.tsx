import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import DemoView from "./demo-view";
import { Demo } from "../../store/demo";
import { useLogger } from "../../hooks/use-logger";
import { useInjectable } from "../../hooks/use-di";

export default observer(() => {
  const demo = useInjectable(Demo);
  const logger = useLogger();

  const handleClick = useCallback(() => {
    logger.debug("click debug");
    logger.info("click info");
    logger.warn("click warn");
    logger.error("click error");

    demo.doSth();
  }, [demo, logger]);

  return <DemoView msg={demo.msg} onClick={handleClick} />;
});
