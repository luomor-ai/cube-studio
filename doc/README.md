```shell
# h1
sh start.sh 10.50.10.27

# h2
sh pull_image_kubeflow.sh

升级方式
备份一下mysql数据库
cd install/kubernetes
kubectl delete -k cube/overlays/
kubectl apply -k cube/overlays/

Gaea
rosefinch
Rosefinch
sudo docker build -t yiluxiangbei/rosefinch-dashboard:base1 -f docker/Dockerfile-base .
sudo docker push yiluxiangbei/rosefinch-dashboard:base1

sudo docker pull ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard:base
sudo docker tag ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard:base yiluxiangbei/rosefinch-dashboard:base
sudo docker push yiluxiangbei/rosefinch-dashboard:base

sudo docker build -t yiluxiangbei/rosefinch-dashboard:2022.09.01 -f docker/Dockerfile .
sudo docker push yiluxiangbei/rosefinch-dashboard:2022.09.01

sudo docker build -t yiluxiangbei/rosefinch-dashboard:2022.10.12 -f docker/Dockerfile .
sudo docker push yiluxiangbei/rosefinch-dashboard:2022.10.12
sudo docker pull yiluxiangbei/rosefinch-dashboard:2022.10.12
sudo docker tag yiluxiangbei/rosefinch-dashboard:2022.10.12 ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard:2022.10.12

sudo docker build -t yiluxiangbei/rosefinch-dashboard:2022.10.18 -f docker/Dockerfile .
sudo docker push yiluxiangbei/rosefinch-dashboard:2022.10.18
sudo docker pull yiluxiangbei/rosefinch-dashboard:2022.10.18
sudo docker tag yiluxiangbei/rosefinch-dashboard:2022.10.18 ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard:2022.10.12

cd myapp
sudo docker run -ti --privileged --volume="$(pwd)":/rosefinch-dashboard-myapp -v "$(pwd)"/root:/root --rm node:16 bash
cd /rosefinch-dashboard-myapp/frontend
yarn build
cd /rosefinch-dashboard-myapp/vision
# sudo docker run -ti --privileged --volume="$(pwd)":/rosefinch-dashboard-myapp -v "$(pwd)"/root:/root --rm node:14 bash
# npm i @rushstack/eslint-patch
# npm run lint-fix
yarn build
cd /rosefinch-dashboard-myapp/visionPlus
yarn build

# npm install -g cnpm --registry=https://registry.npm.taobao.org
# cnpm install
vision
cnpm i eslint
cnpm i @typescript-eslint/eslint-plugin
chmod -R 777 node_modules/.cache/.eslintcache
npm run build
visionPlus
mkdir node_modules/.cache
chmod -R 777 node_modules/.cache
# cnpm i @rushstack/eslint-patch
# cnpm i @rushstack/eslint-patch@1.1.4
# cnpm i eslint-config-react-app@7.0.1
# cnpm i eslint-config-react-app@7.0.0
# cnpm i eslint-config-react-app@7.0.0-next.91
# cnpm i eslint-config-react-app@6.0.0
npm install
npm run build

npm install yarn -g
yarn install
yarn build

npx browserslist@latest --update-db
mkdir node_modules/.cache

chmod -R 777 node_modules/.cache/

# 6.1.0
# npm install --save mobx
# npm install mobx
# cnpm install mobx

sudo docker build -t yiluxiangbei/rosefinch-dashboard-frontend:2022.10.12 -f docker/frontend/Dockerfile .
sudo docker push yiluxiangbei/rosefinch-dashboard-frontend:2022.10.12
sudo docker pull yiluxiangbei/rosefinch-dashboard-frontend:2022.10.12
sudo docker tag yiluxiangbei/rosefinch-dashboard-frontend:2022.10.12 ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard-frontend:2022.10.12

sudo docker build -t yiluxiangbei/rosefinch-dashboard-frontend:2022.10.18 -f docker/frontend/Dockerfile .
sudo docker push yiluxiangbei/rosefinch-dashboard-frontend:2022.10.18
sudo docker pull yiluxiangbei/rosefinch-dashboard-frontend:2022.10.18
sudo docker tag yiluxiangbei/rosefinch-dashboard-frontend:2022.10.18 ccr.ccs.tencentyun.com/cube-studio/kubeflow-dashboard-frontend:2022.10.12

docker rmi `docker images|grep none |  awk '{print $3}'`
```

```shell
https://docker-76009.sz.gfp.tencent-cloud.com/kubeflow/make_pipeline.mp4
https://docker-76009.sz.gfp.tencent-cloud.com/kubeflow/make_job_template.mp4
https://rushstack.io/

sudo docker pull ccr.ccs.tencentyun.com/cube-studio/ubuntu-gpu:cuda10.1-cudnn7-python3.6
sudo docker tag ccr.ccs.tencentyun.com/cube-studio/ubuntu-gpu:cuda10.1-cudnn7-python3.6 yiluxiangbei/ubuntu-gpu:cuda10.1-cudnn7-python3.6
sudo docker push yiluxiangbei/ubuntu-gpu:cuda10.1-cudnn7-python3.6

wget https://docker-76009.sz.gfp.tencent-cloud.com/github/cube-studio/pipeline/coco_data_sample.zip && unzip -o coco_data_sample.zip && cd  coco_data_sample && bash reset_file.sh
ai.7otech.com
wget https://docker-76009.sz.gfp.tencent-cloud.com/github/cube-studio/pipeline/coco_data_sample.zip
sudo mv coco_data_sample.zip /home/7otech/git/ai-web1/webroot/
wget https://ai.7otech.com/coco_data_sample.zip && unzip -o coco_data_sample.zip && cd  coco_data_sample && bash reset_file.sh

sudo docker pull ccr.ccs.tencentyun.com/cube-studio/target-detection
sudo docker tag ccr.ccs.tencentyun.com/cube-studio/target-detection yiluxiangbei/target-detection
sudo docker push yiluxiangbei/target-detection
```

```shell
pine 松
cerdar 雪松类
larch 落叶松
juniper 杜松
cone 松果
cypress 柏树
bamboo 竹
box 黄杨
poplar 白杨
cottonwood 三角叶杨
osier 紫皮柳树
willow 垂柳
birch 白桦
maple 枫树
sequoia 红杉
fir 冷杉
hemlock spruce 铁杉
spruce 云杉
yew 紫杉
eucalytus 桉树
locust 洋槐
wattle 金合欢树
camphor tree 樟树
rosewood 紫檀
ebony 乌檀
sandalwood 檀香木
satinwood 椴木
linden 椴树
rowan 欧洲山梨
teak 柚木树
elm 榆木树
oak 橡树
acorn 橡树果
sycamore 美国梧桐
ginkgo 银杏树
holly 冬青
coco 椰树
date 枣椰树
hickory 山核桃树
plane tree 悬铃树
beech 山毛榉
horse chestnut 七叶树
blackthorn 黑刺李
baobab 猴面包树
elder 接骨木
myrtle 桃金娘科植物
cycad 苏铁
oil palm 油棕榈树
treetop 树梢
branch 树枝
twig 小树枝
bough 大树枝
knot 树节
trunk 树干
leaf 树叶
sprout 新芽
sapling 树苗
stump 树桩
root 树根
root hair 根毛
taproot 主根
bark 树皮
resin 树脂
pith 木髓
cambium 形成层
ring 年轮
wood 木材
```
