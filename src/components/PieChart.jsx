import { ResponsivePie } from "@nivo/pie";
import { token_mode } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
    const theme = useTheme();
    const colors = token_mode(theme.palette.mode);
    return (
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'greens' }}
        borderWidth={4}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.5'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={15}
        arcLinkLabelsTextColor="#999"
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.5'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Technology Team'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Legal Team'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Risk Management Team'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'Marketing and Investor Relations Team'
                },
                id: 'lines'
            }
        ]}
        motionConfig="wobbly"
        //ToolTip configure here
        tooltip={()=>{}}
        legends={[
            {
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 250,
                translateY: 75,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

};

export default PieChart;