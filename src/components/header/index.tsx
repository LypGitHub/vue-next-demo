import { reactive, defineComponent } from 'vue';
import type { IHeaderOptions } from './type';

const Header = (props: any) => {
    return (
    <div onClick={props.onClick}>div { props.x }{props.title}</div>
    );
};

export default defineComponent({
    setup(props: IHeaderOptions) {
        const data = reactive({
            x: 1
        });

        const onClick = (event: Event) => {
            data.x += 1;
        };
    
        return () => {
            const { title }  = props;
            return <Header x={data.x} onClick={onClick} title={title} />;
        };
    }
});