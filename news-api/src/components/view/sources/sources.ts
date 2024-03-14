import { ISourceData } from '../../interfaces';
import './sources.css';

class Sources {
    public draw(data: ISourceData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceElementName = sourceClone.querySelector('.source__item-name') as Element;
            sourceElementName.textContent = item.name;

            const sourceElement = sourceClone.querySelector('.source__item') as Element;
            sourceElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as Element).append(fragment);
    }
}

export default Sources;
