<template>
  <div>
    <md-table v-model="safetyAid">
      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
        md-selectable="multiple"
        md-auto-select
      >
        <md-table-cell md-label="序号">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="蓝牙地址">{{ item.udid }}</md-table-cell>
        <md-table-cell md-label="所属公司">{{ item.owner }}</md-table-cell>
        <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="修改和删除">
          <md-button class="md-icon-button" @click="edit(item)">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" @click="del(item.id)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-button class="md-fab md-fab-bottom-right" id="addButton">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script lang="ts">
import Axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

import clone from '../../utils/clone';

@Component({})

export default class TableBasic extends Vue {
  private safetyAid = [
    {
      id: 1,
      udid: '54:34:xd:89:dd',
      owner: 2,
      type: 0,
    },
  ];

  private getAlternateLabel(count: number): string {
    return `当前选中 ${count} 个`;
  }

  private created(): void {
    console.log('create   =======');
    Axios.get(`https://dev.yifenganxin.com:8541/biz/safety-aid?at=f2p8bRGb0x3bRGk55e5zMMdG6CnM3565`)
      .then(res => {
        if (res.data.result == 0 && res.data.data !== null && res.status == 200) {
          this.safetyAid = clone(res.data.data);
          console.info(this.safetyAid);
        }
      })
      .catch(err => {
        // this.lable = "连接服务器失败";
        // this.error = true;
        // this.description = "请求路径或登录信息过时请重新登录后重新进入页面";
      });
  }
}
</script>