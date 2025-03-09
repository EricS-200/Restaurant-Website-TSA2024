import React from 'react';
import CommunityArticle from '@/components/communityarticle';
import placeholder from "@/public/placeholders/placeholderblog.png"
export default function test() {
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque lectus vitae dignissim pretium. Fusce urna libero, ultrices ut est sed, sodales tempus eros. Integer id congue mauris. Integer tincidunt tortor metus, vitae varius ex cursus nec. Donec accumsan laoreet dolor, ac luctus urna. Nunc sodales augue a nunc porta venenatis. Fusce mattis lectus tortor, dapibus placerat lacus tristique vel. In vel mi sit amet quam molestie placerat. Aliquam mauris metus, fermentum id suscipit ut, consectetur vitae nisl. Nunc blandit euismod nibh at bibendum. Aliquam erat volutpat. Aliquam cursus eleifend ex ac mattis. Nulla ultricies iaculis orci, ut congue arcu porta eu. Quisque ultrices maximus quam nec dapibus. Curabitur pharetra bibendum mi. Sed sed rutrum diam. Donec a commodo risus. Sed at diam sed mauris euismod sodales. Nunc non enim nunc. Vivamus elementum tristique justo sit amet mattis. Aliquam mauris metus, fermentum id suscipit ut, consectetur vitae nisl. Nunc blandit euismod nibh at bibendum. Aliquam erat volutpat. Aliquam cursus eleifend ex ac mattis. Nulla ultricies iaculis orci, ut congue arcu porta eu. Quisque ultrices maximus quam nec dapibus. Curabitur pharetra bibendum mi. Sed sed rutrum diam. Donec a commodo risus. Sed at diam sed mauris euismod sodales. Nunc non enim nunc. Vivamus elementum tristique justo sit amet mattis."
    return (
        <div>
            <CommunityArticle title="Test Article" description={desc} author="Test Author" src={placeholder} />
        </div>
    );
}