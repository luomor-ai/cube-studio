```shell
# h1
sh start.sh 10.50.10.27

# h2
sh pull_image_kubeflow.sh

升级方式
备份一下mysql数据库
kubectl delete -k cube/overlays/
kubectl apply -k cube/overlays/
```
