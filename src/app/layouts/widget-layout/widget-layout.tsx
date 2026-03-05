import { useParams } from 'react-router-dom';

export const WidgetLayout = () => {
  const { widgetType } = useParams();
  return <section className={widgetType}>Widget Layout (widgetType: {widgetType})</section>;
};
