import {createProviderFactory, Provider, ProviderConfigType, Options} from '@ts-terraform/provider'
import path from 'path'

interface ProviderConfig extends ProviderConfigType {
  providerSchema: {
    access_key?: string
    allowed_account_ids?: Array<string>
    forbidden_account_ids?: Array<string>
    insecure?: boolean
    max_retries?: number
    profile?: string
    region: string
    s3_force_path_style?: boolean
    secret_key?: string
    shared_credentials_file?: string
    skip_credentials_validation?: boolean
    skip_get_ec2_platforms?: boolean
    skip_metadata_api_check?: boolean
    skip_region_validation?: boolean
    skip_requesting_account_id?: boolean
    token?: string
    assume_role?: {external_id?: string; policy?: string; role_arn?: string; session_name?: string}
    endpoints?: Array<{
      accessanalyzer?: string
      acm?: string
      acmpca?: string
      amplify?: string
      apigateway?: string
      applicationautoscaling?: string
      applicationinsights?: string
      appmesh?: string
      appstream?: string
      appsync?: string
      athena?: string
      autoscaling?: string
      autoscalingplans?: string
      backup?: string
      batch?: string
      budgets?: string
      cloud9?: string
      cloudformation?: string
      cloudfront?: string
      cloudhsm?: string
      cloudsearch?: string
      cloudtrail?: string
      cloudwatch?: string
      cloudwatchevents?: string
      cloudwatchlogs?: string
      codebuild?: string
      codecommit?: string
      codedeploy?: string
      codepipeline?: string
      cognitoidentity?: string
      cognitoidp?: string
      configservice?: string
      cur?: string
      dataexchange?: string
      datapipeline?: string
      datasync?: string
      dax?: string
      devicefarm?: string
      directconnect?: string
      dlm?: string
      dms?: string
      docdb?: string
      ds?: string
      dynamodb?: string
      ec2?: string
      ecr?: string
      ecs?: string
      efs?: string
      eks?: string
      elasticache?: string
      elasticbeanstalk?: string
      elastictranscoder?: string
      elb?: string
      emr?: string
      es?: string
      firehose?: string
      fms?: string
      forecast?: string
      fsx?: string
      gamelift?: string
      glacier?: string
      globalaccelerator?: string
      glue?: string
      greengrass?: string
      guardduty?: string
      iam?: string
      imagebuilder?: string
      inspector?: string
      iot?: string
      iotanalytics?: string
      iotevents?: string
      kafka?: string
      kinesis?: string
      kinesis_analytics?: string
      kinesisanalytics?: string
      kinesisanalyticsv2?: string
      kinesisvideo?: string
      kms?: string
      lakeformation?: string
      lambda?: string
      lexmodels?: string
      licensemanager?: string
      lightsail?: string
      macie?: string
      managedblockchain?: string
      marketplacecatalog?: string
      mediaconnect?: string
      mediaconvert?: string
      medialive?: string
      mediapackage?: string
      mediastore?: string
      mediastoredata?: string
      mq?: string
      neptune?: string
      networkmanager?: string
      opsworks?: string
      organizations?: string
      personalize?: string
      pinpoint?: string
      pricing?: string
      qldb?: string
      quicksight?: string
      r53?: string
      ram?: string
      rds?: string
      redshift?: string
      resourcegroups?: string
      route53?: string
      route53domains?: string
      route53resolver?: string
      s3?: string
      s3control?: string
      sagemaker?: string
      sdb?: string
      secretsmanager?: string
      securityhub?: string
      serverlessrepo?: string
      servicecatalog?: string
      servicediscovery?: string
      servicequotas?: string
      ses?: string
      shield?: string
      sns?: string
      sqs?: string
      ssm?: string
      stepfunctions?: string
      storagegateway?: string
      sts?: string
      swf?: string
      synthetics?: string
      transfer?: string
      waf?: string
      wafregional?: string
      wafv2?: string
      worklink?: string
      workmail?: string
      workspaces?: string
      xray?: string
    }>
    ignore_tags?: {key_prefixes?: Array<string>; keys?: Array<string>}
  }
  dataSourceSchemas: {
    aws_ebs_snapshot: {
      data_encryption_key_id?: string
      description?: string
      encrypted?: boolean
      id?: string
      kms_key_id?: string
      most_recent?: boolean
      owner_alias?: string
      owner_id?: string
      owners?: Array<string>
      restorable_by_user_ids?: Array<string>
      snapshot_id?: string
      snapshot_ids?: Array<string>
      state?: string
      tags?: Record<string, string>
      volume_id?: string
      volume_size?: number
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_vpcs: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_route53_delegation_set: {caller_reference?: string; id: string; name_servers?: Array<string>}
    aws_route53_resolver_rules: {
      id?: string
      owner_id?: string
      resolver_endpoint_id?: string
      resolver_rule_ids?: Array<string>
      rule_type?: string
      share_status?: string
    }
    aws_organizations_organizational_units: {
      children?: Array<{arn: string; id: string; name: string}>
      id?: string
      parent_id: string
    }
    aws_ssm_parameter: {
      arn?: string
      id?: string
      name: string
      type?: string
      value?: string
      version?: number
      with_decryption?: boolean
    }
    aws_cloudformation_export: {exporting_stack_id?: string; id?: string; name: string; value?: string}
    aws_db_event_categories: {event_categories?: Array<string>; id?: string; source_type?: string}
    aws_ebs_volume: {
      arn?: string
      availability_zone?: string
      encrypted?: boolean
      id?: string
      iops?: number
      kms_key_id?: string
      most_recent?: boolean
      multi_attach_enabled?: boolean
      outpost_arn?: string
      size?: number
      snapshot_id?: string
      tags?: Record<string, string>
      volume_id?: string
      volume_type?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_alb_listener: {
      arn?: string
      certificate_arn?: string
      default_action?: Array<{
        authenticate_cognito: Array<{
          authentication_request_extra_params: Record<string, string>
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }>
        authenticate_oidc: Array<{
          authentication_request_extra_params: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          token_endpoint: string
          user_info_endpoint: string
        }>
        fixed_response: Array<{content_type: string; message_body: string; status_code: string}>
        order: number
        redirect: Array<{
          host: string
          path: string
          port: string
          protocol: string
          query: string
          status_code: string
        }>
        target_group_arn: string
        type: string
      }>
      id?: string
      load_balancer_arn?: string
      port?: number
      protocol?: string
      ssl_policy?: string
    }
    aws_route: {
      destination_cidr_block?: string
      destination_ipv6_cidr_block?: string
      egress_only_gateway_id?: string
      gateway_id?: string
      id?: string
      instance_id?: string
      nat_gateway_id?: string
      network_interface_id?: string
      route_table_id: string
      transit_gateway_id?: string
      vpc_peering_connection_id?: string
    }
    aws_vpc_peering_connection: {
      accepter?: Record<string, boolean>
      cidr_block?: string
      id?: string
      owner_id?: string
      peer_cidr_block?: string
      peer_owner_id?: string
      peer_region?: string
      peer_vpc_id?: string
      region?: string
      requester?: Record<string, boolean>
      status?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_batch_job_queue: {
      arn?: string
      compute_environment_order?: Array<{compute_environment: string; order: number}>
      id?: string
      name: string
      priority?: number
      state?: string
      status?: string
      status_reason?: string
    }
    aws_servicequotas_service: {id?: string; service_code?: string; service_name: string}
    aws_kinesis_stream: {
      arn?: string
      closed_shards?: Array<string>
      creation_timestamp?: number
      id?: string
      name: string
      open_shards?: Array<string>
      retention_period?: number
      shard_level_metrics?: Array<string>
      status?: string
      tags?: Record<string, string>
    }
    aws_pricing_product: {
      id?: string
      result?: string
      service_code: string
      filters: Array<{field: string; value: string}>
    }
    aws_rds_cluster: {
      arn?: string
      availability_zones?: Array<string>
      backtrack_window?: number
      backup_retention_period?: number
      cluster_identifier: string
      cluster_members?: Array<string>
      cluster_resource_id?: string
      database_name?: string
      db_cluster_parameter_group_name?: string
      db_subnet_group_name?: string
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_version?: string
      final_snapshot_identifier?: string
      hosted_zone_id?: string
      iam_database_authentication_enabled?: boolean
      iam_roles?: Array<string>
      id?: string
      kms_key_id?: string
      master_username?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      reader_endpoint?: string
      replication_source_identifier?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
    }
    aws_ec2_transit_gateway_dx_gateway_attachment: {
      dx_gateway_id?: string
      id?: string
      tags?: Record<string, string>
      transit_gateway_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_cloudfront_distribution: {
      arn?: string
      domain_name?: string
      enabled?: boolean
      etag?: string
      hosted_zone_id?: string
      id: string
      in_progress_validation_batches?: number
      last_modified_time?: string
      status?: string
      tags?: Record<string, string>
    }
    aws_ec2_instance_type_offering: {
      id?: string
      instance_type?: string
      location_type?: string
      preferred_instance_types?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ec2_local_gateway: {
      id?: string
      outpost_arn?: string
      owner_id?: string
      state?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_elb_hosted_zone_id: {id?: string; region?: string}
    aws_ec2_transit_gateway_vpc_attachment: {
      dns_support?: string
      id?: string
      ipv6_support?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      transit_gateway_id?: string
      vpc_id?: string
      vpc_owner_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ebs_encryption_by_default: {enabled?: boolean; id?: string}
    aws_vpn_gateway: {
      amazon_side_asn?: string
      attached_vpc_id?: string
      availability_zone?: string
      id?: string
      state?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_subnet_ids: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      vpc_id: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_db_instance: {
      address?: string
      allocated_storage?: number
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      backup_retention_period?: number
      ca_cert_identifier?: string
      db_cluster_identifier?: string
      db_instance_arn?: string
      db_instance_class?: string
      db_instance_identifier: string
      db_instance_port?: number
      db_name?: string
      db_parameter_groups?: Array<string>
      db_security_groups?: Array<string>
      db_subnet_group?: string
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_version?: string
      hosted_zone_id?: string
      id?: string
      iops?: number
      kms_key_id?: string
      license_model?: string
      master_username?: string
      monitoring_interval?: number
      monitoring_role_arn?: string
      multi_az?: boolean
      option_group_memberships?: Array<string>
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      publicly_accessible?: boolean
      replicate_source_db?: string
      resource_id?: string
      storage_encrypted?: boolean
      storage_type?: string
      tags?: Record<string, string>
      timezone?: string
      vpc_security_groups?: Array<string>
    }
    aws_ec2_transit_gateway_peering_attachment: {
      id?: string
      peer_account_id?: string
      peer_region?: string
      peer_transit_gateway_id?: string
      tags?: Record<string, string>
      transit_gateway_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_vpc_dhcp_options: {
      dhcp_options_id?: string
      domain_name?: string
      domain_name_servers?: Array<string>
      id?: string
      netbios_name_servers?: Array<string>
      netbios_node_type?: string
      ntp_servers?: Array<string>
      owner_id?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_lb_target_group: {
      arn?: string
      arn_suffix?: string
      deregistration_delay?: number
      health_check?: Array<{
        enabled: boolean
        healthy_threshold: number
        interval: number
        matcher: string
        path: string
        port: string
        protocol: string
        timeout: number
        unhealthy_threshold: number
      }>
      id?: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type?: string
      name?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      stickiness?: Array<{cookie_duration: number; enabled: boolean; type: string}>
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
    }
    aws_kms_secret: {
      id?: string
      secret: Array<{context?: Record<string, string>; grant_tokens?: Array<string>; name: string; payload: string}>
    }
    aws_servicequotas_service_quota: {
      adjustable?: boolean
      arn?: string
      default_value?: number
      global_quota?: boolean
      id?: string
      quota_code?: string
      quota_name?: string
      service_code: string
      service_name?: string
      value?: number
    }
    aws_sfn_activity: {arn?: string; creation_date?: string; id?: string; name?: string}
    aws_region: {current?: boolean; description?: string; endpoint?: string; id?: string; name?: string}
    aws_dynamodb_table: {
      arn?: string
      attribute?: Array<{name: string; type: string}>
      billing_mode?: string
      global_secondary_index?: Array<{
        hash_key: string
        name: string
        non_key_attributes: Array<string>
        projection_type: string
        range_key: string
        read_capacity: number
        write_capacity: number
      }>
      hash_key?: string
      id?: string
      local_secondary_index?: Array<{
        name: string
        non_key_attributes: Array<string>
        projection_type: string
        range_key: string
      }>
      name: string
      point_in_time_recovery?: Array<{enabled: boolean}>
      range_key?: string
      read_capacity?: number
      replica?: Array<{region_name: string}>
      stream_arn?: string
      stream_enabled?: boolean
      stream_label?: string
      stream_view_type?: string
      tags?: Record<string, string>
      ttl?: Array<{attribute_name: string; enabled: boolean}>
      write_capacity?: number
      server_side_encryption?: {enabled?: boolean; kms_key_arn?: string}
    }
    aws_waf_web_acl: {id?: string; name: string}
    aws_ecr_image: {
      id?: string
      image_digest?: string
      image_pushed_at?: number
      image_size_in_bytes?: number
      image_tag?: string
      image_tags?: Array<string>
      registry_id?: string
      repository_name: string
    }
    aws_lambda_invocation: {
      function_name: string
      id?: string
      input: string
      qualifier?: string
      result?: string
      result_map?: Record<string, string>
    }
    aws_ebs_default_kms_key: {id?: string; key_arn?: string}
    aws_lb: {
      access_logs?: Array<{bucket: string; enabled: boolean; prefix: string}>
      arn?: string
      arn_suffix?: string
      dns_name?: string
      drop_invalid_header_fields?: boolean
      enable_deletion_protection?: boolean
      id?: string
      idle_timeout?: number
      internal?: boolean
      ip_address_type?: string
      load_balancer_type?: string
      name?: string
      security_groups?: Array<string>
      subnet_mapping?: Array<{allocation_id: string; subnet_id: string}>
      subnets?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      zone_id?: string
    }
    aws_route_tables: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_internet_gateway: {
      attachments?: Array<{state: string; vpc_id: string}>
      id?: string
      internet_gateway_id?: string
      owner_id?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_route53_resolver_rule: {
      arn?: string
      domain_name?: string
      id?: string
      name?: string
      owner_id?: string
      resolver_endpoint_id?: string
      resolver_rule_id?: string
      rule_type?: string
      share_status?: string
      tags?: Record<string, string>
    }
    aws_network_interfaces: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ami_ids: {
      executable_users?: Array<string>
      id?: string
      ids?: Array<string>
      name_regex?: string
      owners: Array<string>
      sort_ascending?: boolean
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_lambda_layer_version: {
      arn?: string
      compatible_runtime?: string
      compatible_runtimes?: Array<string>
      created_date?: string
      description?: string
      id?: string
      layer_arn?: string
      layer_name: string
      license_info?: string
      source_code_hash?: string
      source_code_size?: number
      version?: number
    }
    aws_glue_script: {
      id?: string
      language?: string
      python_script?: string
      scala_code?: string
      dag_edge: Array<{source: string; target: string; target_parameter?: string}>
      dag_node: Array<{
        id: string
        line_number?: number
        node_type: string
        args: Array<{name: string; param?: boolean; value: string}>
      }>
    }
    aws_acmpca_certificate_authority: {
      arn: string
      certificate?: string
      certificate_chain?: string
      certificate_signing_request?: string
      id?: string
      not_after?: string
      not_before?: string
      serial?: string
      status?: string
      tags?: Record<string, string>
      type?: string
      revocation_configuration?: Array<{
        crl_configuration?: Array<{
          custom_cname?: string
          enabled?: boolean
          expiration_in_days?: number
          s3_bucket_name?: string
        }>
      }>
    }
    aws_cloudwatch_log_group: {
      arn?: string
      creation_time?: number
      id?: string
      kms_key_id?: string
      name: string
      retention_in_days?: number
      tags?: Record<string, string>
    }
    aws_launch_template: {
      arn?: string
      block_device_mappings?: Array<{
        device_name: string
        ebs: Array<{
          delete_on_termination: string
          encrypted: string
          iops: number
          kms_key_id: string
          snapshot_id: string
          volume_size: number
          volume_type: string
        }>
        no_device: string
        virtual_name: string
      }>
      credit_specification?: Array<{cpu_credits: string}>
      default_version?: number
      description?: string
      disable_api_termination?: boolean
      ebs_optimized?: string
      elastic_gpu_specifications?: Array<{type: string}>
      hibernation_options?: Array<{configured: boolean}>
      iam_instance_profile?: Array<{arn: string; name: string}>
      id?: string
      image_id?: string
      instance_initiated_shutdown_behavior?: string
      instance_market_options?: Array<{
        market_type: string
        spot_options: Array<{
          block_duration_minutes: number
          instance_interruption_behavior: string
          max_price: string
          spot_instance_type: string
          valid_until: string
        }>
      }>
      instance_type?: string
      kernel_id?: string
      key_name?: string
      latest_version?: number
      metadata_options?: Array<{http_endpoint: string; http_put_response_hop_limit: number; http_tokens: string}>
      monitoring?: Array<{enabled: boolean}>
      name?: string
      network_interfaces?: Array<{
        associate_public_ip_address: string
        delete_on_termination: boolean
        description: string
        device_index: number
        ipv4_address_count: number
        ipv4_addresses: Array<string>
        ipv6_address_count: number
        ipv6_addresses: Array<string>
        network_interface_id: string
        private_ip_address: string
        security_groups: Array<string>
        subnet_id: string
      }>
      placement?: Array<{
        affinity: string
        availability_zone: string
        group_name: string
        host_id: string
        partition_number: number
        spread_domain: string
        tenancy: string
      }>
      ram_disk_id?: string
      security_group_names?: Array<string>
      tag_specifications?: Array<{resource_type: string; tags: Record<string, string>}>
      tags?: Record<string, string>
      user_data?: string
      vpc_security_group_ids?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_iot_endpoint: {endpoint_address?: string; endpoint_type?: string; id?: string}
    aws_kms_alias: {arn?: string; id?: string; name: string; target_key_arn?: string; target_key_id?: string}
    aws_s3_bucket: {
      arn?: string
      bucket: string
      bucket_domain_name?: string
      bucket_regional_domain_name?: string
      hosted_zone_id?: string
      id?: string
      region?: string
      website_domain?: string
      website_endpoint?: string
    }
    aws_alb_target_group: {
      arn?: string
      arn_suffix?: string
      deregistration_delay?: number
      health_check?: Array<{
        enabled: boolean
        healthy_threshold: number
        interval: number
        matcher: string
        path: string
        port: string
        protocol: string
        timeout: number
        unhealthy_threshold: number
      }>
      id?: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type?: string
      name?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      stickiness?: Array<{cookie_duration: number; enabled: boolean; type: string}>
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
    }
    aws_efs_mount_target: {
      dns_name?: string
      file_system_arn?: string
      file_system_id?: string
      id?: string
      ip_address?: string
      mount_target_id: string
      network_interface_id?: string
      security_groups?: Array<string>
      subnet_id?: string
    }
    aws_ec2_transit_gateway_route_table: {
      default_association_route_table?: boolean
      default_propagation_route_table?: boolean
      id?: string
      tags?: Record<string, string>
      transit_gateway_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_storagegateway_local_disk: {
      disk_id?: string
      disk_node?: string
      disk_path?: string
      gateway_arn: string
      id?: string
    }
    aws_cloudtrail_service_account: {arn?: string; id?: string; region?: string}
    aws_qldb_ledger: {arn?: string; deletion_protection?: boolean; id?: string; name: string}
    aws_lambda_alias: {
      arn?: string
      description?: string
      function_name: string
      function_version?: string
      id?: string
      invoke_arn?: string
      name: string
    }
    aws_nat_gateway: {
      allocation_id?: string
      id?: string
      network_interface_id?: string
      private_ip?: string
      public_ip?: string
      state?: string
      subnet_id?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_wafv2_regex_pattern_set: {
      arn?: string
      description?: string
      id?: string
      name: string
      regular_expression?: Array<{regex_string: string}>
      scope: string
    }
    aws_ec2_local_gateway_route_tables: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_iam_policy: {arn: string; description?: string; id?: string; name?: string; path?: string; policy?: string}
    aws_sfn_state_machine: {
      arn?: string
      creation_date?: string
      definition?: string
      id?: string
      name: string
      role_arn?: string
      status?: string
    }
    aws_wafv2_rule_group: {arn?: string; description?: string; id?: string; name: string; scope: string}
    aws_dx_gateway: {amazon_side_asn?: string; id?: string; name: string; owner_account_id?: string}
    aws_iam_server_certificate: {
      arn?: string
      certificate_body?: string
      certificate_chain?: string
      expiration_date?: string
      id?: string
      latest?: boolean
      name?: string
      name_prefix?: string
      path?: string
      path_prefix?: string
      upload_date?: string
    }
    aws_ebs_snapshot_ids: {
      id?: string
      ids?: Array<string>
      owners?: Array<string>
      restorable_by_user_ids?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_backup_selection: {
      iam_role_arn?: string
      id?: string
      name?: string
      plan_id: string
      resources?: Array<string>
      selection_id: string
    }
    aws_vpc: {
      arn?: string
      cidr_block?: string
      cidr_block_associations?: Array<{association_id: string; cidr_block: string; state: string}>
      default?: boolean
      dhcp_options_id?: string
      enable_dns_hostnames?: boolean
      enable_dns_support?: boolean
      id?: string
      instance_tenancy?: string
      ipv6_association_id?: string
      ipv6_cidr_block?: string
      main_route_table_id?: string
      owner_id?: string
      state?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_vpc_endpoint: {
      cidr_blocks?: Array<string>
      dns_entry?: Array<{dns_name: string; hosted_zone_id: string}>
      id?: string
      network_interface_ids?: Array<string>
      owner_id?: string
      policy?: string
      prefix_list_id?: string
      private_dns_enabled?: boolean
      requester_managed?: boolean
      route_table_ids?: Array<string>
      security_group_ids?: Array<string>
      service_name?: string
      state?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      vpc_endpoint_type?: string
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_sqs_queue: {arn?: string; id?: string; name: string; tags?: Record<string, string>; url?: string}
    aws_wafregional_rate_based_rule: {id?: string; name: string}
    aws_waf_rate_based_rule: {id?: string; name: string}
    aws_kms_ciphertext: {
      ciphertext_blob?: string
      context?: Record<string, string>
      id?: string
      key_id: string
      plaintext: string
    }
    aws_elasticache_replication_group: {
      auth_token_enabled?: boolean
      automatic_failover_enabled?: boolean
      configuration_endpoint_address?: string
      id?: string
      member_clusters?: Array<string>
      node_type?: string
      number_cache_clusters?: number
      port?: number
      primary_endpoint_address?: string
      replication_group_description?: string
      replication_group_id: string
      snapshot_retention_limit?: number
      snapshot_window?: string
    }
    aws_s3_bucket_object: {
      body?: string
      bucket: string
      cache_control?: string
      content_disposition?: string
      content_encoding?: string
      content_language?: string
      content_length?: number
      content_type?: string
      etag?: string
      expiration?: string
      expires?: string
      id?: string
      key: string
      last_modified?: string
      metadata?: Record<string, string>
      object_lock_legal_hold_status?: string
      object_lock_mode?: string
      object_lock_retain_until_date?: string
      range?: string
      server_side_encryption?: string
      sse_kms_key_id?: string
      storage_class?: string
      tags?: Record<string, string>
      version_id?: string
      website_redirect_location?: string
    }
    aws_kms_key: {
      arn?: string
      aws_account_id?: string
      creation_date?: string
      customer_master_key_spec?: string
      deletion_date?: string
      description?: string
      enabled?: boolean
      expiration_model?: string
      grant_tokens?: Array<string>
      id?: string
      key_id: string
      key_manager?: string
      key_state?: string
      key_usage?: string
      origin?: string
      valid_to?: string
    }
    aws_msk_cluster: {
      arn?: string
      bootstrap_brokers?: string
      bootstrap_brokers_tls?: string
      cluster_name: string
      id?: string
      kafka_version?: string
      number_of_broker_nodes?: number
      tags?: Record<string, string>
      zookeeper_connect_string?: string
    }
    aws_cloudhsm_v2_cluster: {
      cluster_certificates?: Array<{
        aws_hardware_certificate: string
        cluster_certificate: string
        cluster_csr: string
        hsm_certificate: string
        manufacturer_hardware_certificate: string
      }>
      cluster_id: string
      cluster_state?: string
      id?: string
      security_group_id?: string
      subnet_ids?: Array<string>
      vpc_id?: string
    }
    aws_workspaces_bundle: {
      bundle_id: string
      compute_type?: Array<{name: string}>
      description?: string
      id?: string
      name?: string
      owner?: string
      root_storage?: Array<{capacity: string}>
      user_storage?: Array<{capacity: string}>
    }
    aws_api_gateway_resource: {id?: string; parent_id?: string; path: string; path_part?: string; rest_api_id: string}
    aws_ecs_container_definition: {
      container_name: string
      cpu?: number
      disable_networking?: boolean
      docker_labels?: Record<string, string>
      environment?: Record<string, string>
      id?: string
      image?: string
      image_digest?: string
      memory?: number
      memory_reservation?: number
      task_definition: string
    }
    aws_autoscaling_groups: {
      arns?: Array<string>
      id?: string
      names?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_s3_bucket_objects: {
      bucket: string
      common_prefixes?: Array<string>
      delimiter?: string
      encoding_type?: string
      fetch_owner?: boolean
      id?: string
      keys?: Array<string>
      max_keys?: number
      owners?: Array<string>
      prefix?: string
      start_after?: string
    }
    aws_iam_instance_profile: {
      arn?: string
      create_date?: string
      id?: string
      name: string
      path?: string
      role_arn?: string
      role_id?: string
      role_name?: string
    }
    aws_lb_listener: {
      arn?: string
      certificate_arn?: string
      default_action?: Array<{
        authenticate_cognito: Array<{
          authentication_request_extra_params: Record<string, string>
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }>
        authenticate_oidc: Array<{
          authentication_request_extra_params: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          token_endpoint: string
          user_info_endpoint: string
        }>
        fixed_response: Array<{content_type: string; message_body: string; status_code: string}>
        order: number
        redirect: Array<{
          host: string
          path: string
          port: string
          protocol: string
          query: string
          status_code: string
        }>
        target_group_arn: string
        type: string
      }>
      id?: string
      load_balancer_arn?: string
      port?: number
      protocol?: string
      ssl_policy?: string
    }
    aws_ec2_coip_pool: {
      id?: string
      local_gateway_route_table_id?: string
      pool_cidrs?: Array<string>
      pool_id?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_vpc_endpoint_service: {
      acceptance_required?: boolean
      availability_zones?: Array<string>
      base_endpoint_dns_names?: Array<string>
      id?: string
      manages_vpc_endpoints?: boolean
      owner?: string
      private_dns_name?: string
      service?: string
      service_id?: string
      service_name?: string
      service_type?: string
      tags?: Record<string, string>
      vpc_endpoint_policy_supported?: boolean
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ec2_transit_gateway_vpn_attachment: {
      id?: string
      tags?: Record<string, string>
      transit_gateway_id?: string
      vpn_connection_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_arn: {
      account?: string
      arn: string
      id?: string
      partition?: string
      region?: string
      resource?: string
      service?: string
    }
    aws_transfer_server: {
      arn?: string
      endpoint?: string
      id?: string
      identity_provider_type?: string
      invocation_role?: string
      logging_role?: string
      server_id: string
      url?: string
    }
    aws_elasticache_cluster: {
      arn?: string
      availability_zone?: string
      cache_nodes?: Array<{address: string; availability_zone: string; id: string; port: number}>
      cluster_address?: string
      cluster_id: string
      configuration_endpoint?: string
      engine?: string
      engine_version?: string
      id?: string
      maintenance_window?: string
      node_type?: string
      notification_topic_arn?: string
      num_cache_nodes?: number
      parameter_group_name?: string
      port?: number
      replication_group_id?: string
      security_group_ids?: Array<string>
      security_group_names?: Array<string>
      snapshot_retention_limit?: number
      snapshot_window?: string
      subnet_group_name?: string
      tags?: Record<string, string>
    }
    aws_secretsmanager_secret: {
      arn?: string
      description?: string
      id?: string
      kms_key_id?: string
      name?: string
      policy?: string
      rotation_enabled?: boolean
      rotation_lambda_arn?: string
      rotation_rules?: Array<{automatically_after_days: number}>
      tags?: Record<string, string>
    }
    aws_api_gateway_vpc_link: {
      description?: string
      id?: string
      name: string
      status?: string
      status_message?: string
      tags?: Record<string, string>
      target_arns?: Array<string>
    }
    aws_subnet: {
      arn?: string
      assign_ipv6_address_on_creation?: boolean
      availability_zone?: string
      availability_zone_id?: string
      cidr_block?: string
      default_for_az?: boolean
      id?: string
      ipv6_cidr_block?: string
      ipv6_cidr_block_association_id?: string
      map_public_ip_on_launch?: boolean
      outpost_arn?: string
      owner_id?: string
      state?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_elastic_beanstalk_solution_stack: {id?: string; most_recent?: boolean; name?: string; name_regex: string}
    aws_ec2_transit_gateway: {
      amazon_side_asn?: number
      arn?: string
      association_default_route_table_id?: string
      auto_accept_shared_attachments?: string
      default_route_table_association?: string
      default_route_table_propagation?: string
      description?: string
      dns_support?: string
      id?: string
      owner_id?: string
      propagation_default_route_table_id?: string
      tags?: Record<string, string>
      vpn_ecmp_support?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ecs_task_definition: {
      family?: string
      id?: string
      network_mode?: string
      revision?: number
      status?: string
      task_definition: string
      task_role_arn?: string
    }
    aws_elastic_beanstalk_hosted_zone: {id?: string; region?: string}
    aws_autoscaling_group: {
      arn?: string
      availability_zones?: Array<string>
      default_cooldown?: number
      desired_capacity?: number
      health_check_grace_period?: number
      health_check_type?: string
      id?: string
      launch_configuration?: string
      load_balancers?: Array<string>
      max_size?: number
      min_size?: number
      name: string
      new_instances_protected_from_scale_in?: boolean
      placement_group?: string
      service_linked_role_arn?: string
      status?: string
      target_group_arns?: Array<string>
      termination_policies?: Array<string>
      vpc_zone_identifier?: string
    }
    aws_ram_resource_share: {
      arn?: string
      id?: string
      name: string
      owning_account_id?: string
      resource_owner: string
      status?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_lambda_function: {
      arn?: string
      dead_letter_config?: Array<{target_arn: string}>
      description?: string
      environment?: Array<{variables: Record<string, string>}>
      function_name: string
      handler?: string
      id?: string
      invoke_arn?: string
      kms_key_arn?: string
      last_modified?: string
      layers?: Array<string>
      memory_size?: number
      qualified_arn?: string
      qualifier?: string
      reserved_concurrent_executions?: number
      role?: string
      runtime?: string
      source_code_hash?: string
      source_code_size?: number
      tags?: Record<string, string>
      timeout?: number
      tracing_config?: Array<{mode: string}>
      version?: string
      vpc_config?: Array<{security_group_ids: Array<string>; subnet_ids: Array<string>; vpc_id: string}>
    }
    aws_ssm_patch_baseline: {
      default_baseline?: boolean
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      operating_system?: string
      owner: string
    }
    aws_kms_secrets: {
      id?: string
      plaintext?: Record<string, string>
      secret: Array<{context?: Record<string, string>; grant_tokens?: Array<string>; name: string; payload: string}>
    }
    aws_ec2_coip_pools: {
      id?: string
      pool_ids?: Array<string>
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ecs_service: {
      arn?: string
      cluster_arn: string
      desired_count?: number
      id?: string
      launch_type?: string
      scheduling_strategy?: string
      service_name: string
      task_definition?: string
    }
    aws_network_acls: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_waf_rule: {id?: string; name: string}
    aws_wafregional_web_acl: {id?: string; name: string}
    aws_db_cluster_snapshot: {
      allocated_storage?: number
      availability_zones?: Array<string>
      db_cluster_identifier?: string
      db_cluster_snapshot_arn?: string
      db_cluster_snapshot_identifier?: string
      engine?: string
      engine_version?: string
      id?: string
      include_public?: boolean
      include_shared?: boolean
      kms_key_id?: string
      license_model?: string
      most_recent?: boolean
      port?: number
      snapshot_create_time?: string
      snapshot_type?: string
      source_db_cluster_snapshot_arn?: string
      status?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_id?: string
    }
    aws_cognito_user_pools: {arns?: Array<string>; id?: string; ids?: Array<string>; name: string}
    aws_api_gateway_rest_api: {
      api_key_source?: string
      arn?: string
      binary_media_types?: Array<string>
      description?: string
      endpoint_configuration?: Array<{types: Array<string>; vpc_endpoint_ids: Array<string>}>
      execution_arn?: string
      id?: string
      minimum_compression_size?: number
      name: string
      policy?: string
      root_resource_id?: string
      tags?: Record<string, string>
    }
    aws_eip: {
      association_id?: string
      customer_owned_ip?: string
      customer_owned_ipv4_pool?: string
      domain?: string
      id?: string
      instance_id?: string
      network_interface_id?: string
      network_interface_owner_id?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      public_ipv4_pool?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_backup_vault: {
      arn?: string
      id?: string
      kms_key_arn?: string
      name: string
      recovery_points?: number
      tags?: Record<string, string>
    }
    aws_alb: {
      access_logs?: Array<{bucket: string; enabled: boolean; prefix: string}>
      arn?: string
      arn_suffix?: string
      dns_name?: string
      drop_invalid_header_fields?: boolean
      enable_deletion_protection?: boolean
      id?: string
      idle_timeout?: number
      internal?: boolean
      ip_address_type?: string
      load_balancer_type?: string
      name?: string
      security_groups?: Array<string>
      subnet_mapping?: Array<{allocation_id: string; subnet_id: string}>
      subnets?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      zone_id?: string
    }
    aws_wafv2_ip_set: {
      addresses?: Array<string>
      arn?: string
      description?: string
      id?: string
      ip_address_version?: string
      name: string
      scope: string
    }
    aws_availability_zones: {
      all_availability_zones?: boolean
      blacklisted_names?: Array<string>
      blacklisted_zone_ids?: Array<string>
      group_names?: Array<string>
      id?: string
      names?: Array<string>
      state?: string
      zone_ids?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_billing_service_account: {arn?: string; id?: string}
    aws_launch_configuration: {
      arn?: string
      associate_public_ip_address?: boolean
      ebs_block_device?: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        snapshot_id: string
        volume_size: number
        volume_type: string
      }>
      ebs_optimized?: boolean
      enable_monitoring?: boolean
      ephemeral_block_device?: Array<{device_name: string; virtual_name: string}>
      iam_instance_profile?: string
      id?: string
      image_id?: string
      instance_type?: string
      key_name?: string
      name: string
      placement_tenancy?: string
      root_block_device?: Array<{
        delete_on_termination: boolean
        encrypted: boolean
        iops: number
        volume_size: number
        volume_type: string
      }>
      security_groups?: Array<string>
      spot_price?: string
      user_data?: string
      vpc_classic_link_id?: string
      vpc_classic_link_security_groups?: Array<string>
    }
    aws_security_group: {
      arn?: string
      description?: string
      id?: string
      name?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_canonical_user_id: {display_name?: string; id?: string}
    aws_iam_role: {
      arn?: string
      assume_role_policy?: string
      assume_role_policy_document?: string
      create_date?: string
      description?: string
      id?: string
      max_session_duration?: number
      name: string
      path?: string
      permissions_boundary?: string
      role_id?: string
      role_name?: string
      tags?: Record<string, string>
      unique_id?: string
    }
    aws_instance: {
      ami?: string
      arn?: string
      associate_public_ip_address?: boolean
      availability_zone?: string
      credit_specification?: Array<{cpu_credits: string}>
      disable_api_termination?: boolean
      ebs_block_device?: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        kms_key_id: string
        snapshot_id: string
        volume_id: string
        volume_size: number
        volume_type: string
      }>
      ebs_optimized?: boolean
      ephemeral_block_device?: Array<{device_name: string; no_device: boolean; virtual_name: string}>
      get_password_data?: boolean
      get_user_data?: boolean
      host_id?: string
      iam_instance_profile?: string
      id?: string
      instance_id?: string
      instance_state?: string
      instance_tags?: Record<string, string>
      instance_type?: string
      key_name?: string
      metadata_options?: Array<{http_endpoint: string; http_put_response_hop_limit: number; http_tokens: string}>
      monitoring?: boolean
      network_interface_id?: string
      outpost_arn?: string
      password_data?: string
      placement_group?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      root_block_device?: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        kms_key_id: string
        volume_id: string
        volume_size: number
        volume_type: string
      }>
      security_groups?: Array<string>
      source_dest_check?: boolean
      subnet_id?: string
      tags?: Record<string, string>
      tenancy?: string
      user_data?: string
      user_data_base64?: string
      vpc_security_group_ids?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ecs_cluster: {
      arn?: string
      cluster_name: string
      id?: string
      pending_tasks_count?: number
      registered_container_instances_count?: number
      running_tasks_count?: number
      setting?: Array<{name: string; value: string}>
      status?: string
    }
    aws_elb: {
      access_logs?: Array<{bucket: string; bucket_prefix: string; enabled: boolean; interval: number}>
      arn?: string
      availability_zones?: Array<string>
      connection_draining?: boolean
      connection_draining_timeout?: number
      cross_zone_load_balancing?: boolean
      dns_name?: string
      health_check?: Array<{
        healthy_threshold: number
        interval: number
        target: string
        timeout: number
        unhealthy_threshold: number
      }>
      id?: string
      idle_timeout?: number
      instances?: Array<string>
      internal?: boolean
      listener?: Array<{
        instance_port: number
        instance_protocol: string
        lb_port: number
        lb_protocol: string
        ssl_certificate_id: string
      }>
      name: string
      security_groups?: Array<string>
      source_security_group?: string
      source_security_group_id?: string
      subnets?: Array<string>
      tags?: Record<string, string>
      zone_id?: string
    }
    aws_route53_zone: {
      caller_reference?: string
      comment?: string
      id?: string
      linked_service_description?: string
      linked_service_principal?: string
      name?: string
      name_servers?: Array<string>
      private_zone?: boolean
      resource_record_set_count?: number
      tags?: Record<string, string>
      vpc_id?: string
      zone_id?: string
    }
    aws_db_snapshot: {
      allocated_storage?: number
      availability_zone?: string
      db_instance_identifier?: string
      db_snapshot_arn?: string
      db_snapshot_identifier?: string
      encrypted?: boolean
      engine?: string
      engine_version?: string
      id?: string
      include_public?: boolean
      include_shared?: boolean
      iops?: number
      kms_key_id?: string
      license_model?: string
      most_recent?: boolean
      option_group_name?: string
      port?: number
      snapshot_create_time?: string
      snapshot_type?: string
      source_db_snapshot_identifier?: string
      source_region?: string
      status?: string
      storage_type?: string
      vpc_id?: string
    }
    aws_wafregional_rule: {id?: string; name: string}
    aws_iam_group: {
      arn?: string
      group_id?: string
      group_name: string
      id?: string
      path?: string
      users?: Array<{arn: string; path: string; user_id: string; user_name: string}>
    }
    aws_organizations_organization: {
      accounts?: Array<{arn: string; email: string; id: string; name: string; status: string}>
      arn?: string
      aws_service_access_principals?: Array<string>
      enabled_policy_types?: Array<string>
      feature_set?: string
      id?: string
      master_account_arn?: string
      master_account_email?: string
      master_account_id?: string
      non_master_accounts?: Array<{arn: string; email: string; id: string; name: string; status: string}>
      roots?: Array<{arn: string; id: string; name: string; policy_types: Array<{status: string; type: string}>}>
    }
    aws_ssm_document: {
      arn?: string
      content?: string
      document_format?: string
      document_type?: string
      document_version?: string
      id?: string
      name: string
    }
    aws_mq_broker: {
      arn?: string
      auto_minor_version_upgrade?: boolean
      broker_id?: string
      broker_name?: string
      configuration?: Array<{id: string; revision: number}>
      deployment_mode?: string
      encryption_options?: Array<{kms_key_id: string; use_aws_owned_key: boolean}>
      engine_type?: string
      engine_version?: string
      host_instance_type?: string
      id?: string
      instances?: Array<{console_url: string; endpoints: Array<string>; ip_address: string}>
      maintenance_window_start_time?: Array<{day_of_week: string; time_of_day: string; time_zone: string}>
      publicly_accessible?: boolean
      security_groups?: Array<string>
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      user?: Array<{console_access: boolean; groups: Array<string>; username: string}>
      logs?: {audit?: boolean; general?: boolean}
    }
    aws_prefix_list: {
      cidr_blocks?: Array<string>
      id?: string
      name?: string
      prefix_list_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_partition: {dns_suffix?: string; id?: string; partition?: string}
    aws_route_table: {
      associations?: Array<{
        gateway_id: string
        main: boolean
        route_table_association_id: string
        route_table_id: string
        subnet_id: string
      }>
      gateway_id?: string
      id?: string
      owner_id?: string
      route_table_id?: string
      routes?: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      subnet_id?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_regions: {
      all_regions?: boolean
      id?: string
      names?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_caller_identity: {account_id?: string; arn?: string; id?: string; user_id?: string}
    aws_network_interface: {
      association?: Array<{
        allocation_id: string
        association_id: string
        ip_owner_id: string
        public_dns_name: string
        public_ip: string
      }>
      attachment?: Array<{attachment_id: string; device_index: number; instance_id: string; instance_owner_id: string}>
      availability_zone?: string
      description?: string
      id?: string
      interface_type?: string
      ipv6_addresses?: Array<string>
      mac_address?: string
      outpost_arn?: string
      owner_id?: string
      private_dns_name?: string
      private_ip?: string
      private_ips?: Array<string>
      requester_id?: string
      security_groups?: Array<string>
      subnet_id?: string
      tags?: Record<string, string>
      vpc_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ec2_local_gateways: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_instances: {
      id?: string
      ids?: Array<string>
      instance_state_names?: Array<string>
      instance_tags?: Record<string, string>
      private_ips?: Array<string>
      public_ips?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ami: {
      architecture?: string
      block_device_mappings?: Array<{
        device_name: string
        ebs: Record<string, string>
        no_device: string
        virtual_name: string
      }>
      creation_date?: string
      description?: string
      executable_users?: Array<string>
      hypervisor?: string
      id?: string
      image_id?: string
      image_location?: string
      image_owner_alias?: string
      image_type?: string
      kernel_id?: string
      most_recent?: boolean
      name?: string
      name_regex?: string
      owner_id?: string
      owners: Array<string>
      platform?: string
      product_codes?: Array<{product_code_id: string; product_code_type: string}>
      public?: boolean
      ramdisk_id?: string
      root_device_name?: string
      root_device_type?: string
      root_snapshot_id?: string
      sriov_net_support?: string
      state?: string
      state_reason?: Record<string, string>
      tags?: Record<string, string>
      virtualization_type?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_sns_topic: {arn?: string; id?: string; name: string}
    aws_ec2_local_gateway_route_table: {
      id?: string
      local_gateway_id?: string
      local_gateway_route_table_id?: string
      outpost_arn?: string
      state?: string
      tags?: Record<string, string>
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_ip_ranges: {
      cidr_blocks?: Array<string>
      create_date?: string
      id?: string
      ipv6_cidr_blocks?: Array<string>
      regions?: Array<string>
      services: Array<string>
      sync_token?: number
      url?: string
    }
    aws_secretsmanager_secret_version: {
      arn?: string
      id?: string
      secret_binary?: string
      secret_id: string
      secret_string?: string
      version_id?: string
      version_stage?: string
      version_stages?: Array<string>
    }
    aws_ecr_repository: {
      arn?: string
      id?: string
      name: string
      registry_id?: string
      repository_url?: string
      tags?: Record<string, string>
    }
    aws_directory_service_directory: {
      access_url?: string
      alias?: string
      connect_settings?: Array<{
        availability_zones: Array<string>
        connect_ips: Array<string>
        customer_dns_ips: Array<string>
        customer_username: string
        subnet_ids: Array<string>
        vpc_id: string
      }>
      description?: string
      directory_id: string
      dns_ip_addresses?: Array<string>
      edition?: string
      enable_sso?: boolean
      id?: string
      name?: string
      security_group_id?: string
      short_name?: string
      size?: string
      tags?: Record<string, string>
      type?: string
      vpc_settings?: Array<{availability_zones: Array<string>; subnet_ids: Array<string>; vpc_id: string}>
    }
    aws_ec2_instance_type_offerings: {
      id?: string
      instance_types?: Array<string>
      location_type?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_redshift_cluster: {
      allow_version_upgrade?: boolean
      automated_snapshot_retention_period?: number
      availability_zone?: string
      bucket_name?: string
      cluster_identifier: string
      cluster_parameter_group_name?: string
      cluster_public_key?: string
      cluster_revision_number?: string
      cluster_security_groups?: Array<string>
      cluster_subnet_group_name?: string
      cluster_type?: string
      cluster_version?: string
      database_name?: string
      elastic_ip?: string
      enable_logging?: boolean
      encrypted?: boolean
      endpoint?: string
      enhanced_vpc_routing?: boolean
      iam_roles?: Array<string>
      id?: string
      kms_key_id?: string
      master_username?: string
      node_type?: string
      number_of_nodes?: number
      port?: number
      preferred_maintenance_window?: string
      publicly_accessible?: boolean
      s3_key_prefix?: string
      tags?: Record<string, string>
      vpc_id?: string
      vpc_security_group_ids?: Array<string>
    }
    aws_waf_ipset: {id?: string; name: string}
    aws_customer_gateway: {
      bgp_asn?: number
      id?: string
      ip_address?: string
      tags?: Record<string, string>
      type?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_elasticsearch_domain: {
      access_policies?: string
      advanced_options?: Record<string, string>
      arn?: string
      cluster_config?: Array<{
        dedicated_master_count: number
        dedicated_master_enabled: boolean
        dedicated_master_type: string
        instance_count: number
        instance_type: string
        zone_awareness_config: Array<{availability_zone_count: number}>
        zone_awareness_enabled: boolean
      }>
      cognito_options?: Array<{enabled: boolean; identity_pool_id: string; role_arn: string; user_pool_id: string}>
      created?: boolean
      deleted?: boolean
      domain_id?: string
      domain_name: string
      ebs_options?: Array<{ebs_enabled: boolean; iops: number; volume_size: number; volume_type: string}>
      elasticsearch_version?: string
      encryption_at_rest?: Array<{enabled: boolean; kms_key_id: string}>
      endpoint?: string
      id?: string
      kibana_endpoint?: string
      log_publishing_options?: Array<{cloudwatch_log_group_arn: string; enabled: boolean; log_type: string}>
      node_to_node_encryption?: Array<{enabled: boolean}>
      processing?: boolean
      snapshot_options?: Array<{automated_snapshot_start_hour: number}>
      tags?: Record<string, string>
      vpc_options?: Array<{
        availability_zones: Array<string>
        security_group_ids: Array<string>
        subnet_ids: Array<string>
        vpc_id: string
      }>
    }
    aws_api_gateway_api_key: {
      created_date?: string
      description?: string
      enabled?: boolean
      id: string
      last_updated_date?: string
      name?: string
      tags?: Record<string, string>
      value?: string
    }
    aws_iam_user: {
      arn?: string
      id?: string
      path?: string
      permissions_boundary?: string
      user_id?: string
      user_name: string
    }
    aws_eks_cluster_auth: {id?: string; name: string; token?: string}
    aws_iam_policy_document: {
      id?: string
      json?: string
      override_json?: string
      policy_id?: string
      source_json?: string
      version?: string
      statement?: Array<{
        actions?: Array<string>
        effect?: string
        not_actions?: Array<string>
        not_resources?: Array<string>
        resources?: Array<string>
        sid?: string
        condition?: Array<{test: string; values: Array<string>; variable: string}>
        not_principals?: Array<{identifiers: Array<string>; type: string}>
        principals?: Array<{identifiers: Array<string>; type: string}>
      }>
    }
    aws_wafregional_ipset: {id?: string; name: string}
    aws_iam_account_alias: {account_alias?: string; id?: string}
    aws_efs_file_system: {
      arn?: string
      creation_token?: string
      dns_name?: string
      encrypted?: boolean
      file_system_id?: string
      id?: string
      kms_key_id?: string
      lifecycle_policy?: Array<{transition_to_ia: string}>
      performance_mode?: string
      provisioned_throughput_in_mibps?: number
      size_in_bytes?: number
      tags?: Record<string, string>
      throughput_mode?: string
    }
    aws_eks_cluster: {
      arn?: string
      certificate_authority?: Array<{data: string}>
      created_at?: string
      enabled_cluster_log_types?: Array<string>
      endpoint?: string
      id?: string
      identity?: Array<{oidc: Array<{issuer: string}>}>
      name: string
      platform_version?: string
      role_arn?: string
      status?: string
      tags?: Record<string, string>
      version?: string
      vpc_config?: Array<{
        cluster_security_group_id: string
        endpoint_private_access: boolean
        endpoint_public_access: boolean
        public_access_cidrs: Array<string>
        security_group_ids: Array<string>
        subnet_ids: Array<string>
        vpc_id: string
      }>
    }
    aws_backup_plan: {
      arn?: string
      id?: string
      name?: string
      plan_id: string
      tags?: Record<string, string>
      version?: string
    }
    aws_cur_report_definition: {
      additional_artifacts?: Array<string>
      additional_schema_elements?: Array<string>
      compression?: string
      format?: string
      id?: string
      report_name: string
      s3_bucket?: string
      s3_prefix?: string
      s3_region?: string
      time_unit?: string
    }
    aws_codecommit_repository: {
      arn?: string
      clone_url_http?: string
      clone_url_ssh?: string
      id?: string
      repository_id?: string
      repository_name: string
    }
    aws_inspector_rules_packages: {arns?: Array<string>; id?: string}
    aws_efs_access_point: {
      access_point_id: string
      arn?: string
      file_system_arn?: string
      file_system_id?: string
      id?: string
      owner_id?: string
      posix_user?: Array<{gid: number; secondary_gids: Array<number>; uid: number}>
      root_directory?: Array<{
        creation_info: Array<{owner_gid: number; owner_uid: number; permissions: string}>
        path: string
      }>
      tags?: Record<string, string>
    }
    aws_guardduty_detector: {
      finding_publishing_frequency?: string
      id?: string
      service_role_arn?: string
      status?: string
    }
    aws_cloudformation_stack: {
      capabilities?: Array<string>
      description?: string
      disable_rollback?: boolean
      iam_role_arn?: string
      id?: string
      name: string
      notification_arns?: Array<string>
      outputs?: Record<string, string>
      parameters?: Record<string, string>
      tags?: Record<string, string>
      template_body?: string
      timeout_in_minutes?: number
    }
    aws_availability_zone: {
      all_availability_zones?: boolean
      group_name?: string
      id?: string
      name?: string
      name_suffix?: string
      network_border_group?: string
      opt_in_status?: string
      region?: string
      state?: string
      zone_id?: string
      filter?: Array<{name: string; values: Array<string>}>
    }
    aws_elastic_beanstalk_application: {
      appversion_lifecycle?: Array<{
        delete_source_from_s3: boolean
        max_age_in_days: number
        max_count: number
        service_role: string
      }>
      arn?: string
      description?: string
      id?: string
      name: string
    }
    aws_batch_compute_environment: {
      arn?: string
      compute_environment_name: string
      ecs_cluster_arn?: string
      id?: string
      service_role?: string
      state?: string
      status?: string
      status_reason?: string
      type?: string
    }
    aws_redshift_service_account: {arn?: string; id?: string; region?: string}
    aws_acm_certificate: {
      arn?: string
      domain: string
      id?: string
      key_types?: Array<string>
      most_recent?: boolean
      statuses?: Array<string>
      tags?: Record<string, string>
      types?: Array<string>
    }
    aws_elb_service_account: {arn?: string; id?: string; region?: string}
    aws_msk_configuration: {
      arn?: string
      description?: string
      id?: string
      kafka_versions?: Array<string>
      latest_revision?: number
      name: string
      server_properties?: string
    }
    aws_security_groups: {
      id?: string
      ids?: Array<string>
      tags?: Record<string, string>
      vpc_ids?: Array<string>
      filter?: Array<{name: string; values: Array<string>}>
    }
  }
  resourceSchemas: {
    aws_s3_bucket_analytics_configuration: {
      bucket: string
      id?: string
      name: string
      filter?: {prefix?: string; tags?: Record<string, string>}
      storage_class_analysis?: {
        data_export: {
          output_schema_version?: string
          destination: {
            s3_bucket_destination: {bucket_account_id?: string; bucket_arn: string; format?: string; prefix?: string}
          }
        }
      }
    }
    aws_ecs_service: {
      cluster?: string
      deployment_maximum_percent?: number
      deployment_minimum_healthy_percent?: number
      desired_count?: number
      enable_ecs_managed_tags?: boolean
      force_new_deployment?: boolean
      health_check_grace_period_seconds?: number
      iam_role?: string
      id?: string
      launch_type?: string
      name: string
      platform_version?: string
      propagate_tags?: string
      scheduling_strategy?: string
      tags?: Record<string, string>
      task_definition: string
      capacity_provider_strategy?: Array<{base?: number; capacity_provider: string; weight?: number}>
      deployment_controller?: {type?: string}
      load_balancer?: Array<{
        container_name: string
        container_port: number
        elb_name?: string
        target_group_arn?: string
      }>
      network_configuration?: {assign_public_ip?: boolean; security_groups?: Array<string>; subnets: Array<string>}
      ordered_placement_strategy?: Array<{field?: string; type: string}>
      placement_constraints?: Array<{expression?: string; type: string}>
      placement_strategy?: Array<{field?: string; type: string}>
      service_registries?: {container_name?: string; container_port?: number; port?: number; registry_arn: string}
    }
    aws_iot_thing: {
      arn?: string
      attributes?: Record<string, string>
      default_client_id?: string
      id?: string
      name: string
      thing_type_name?: string
      version?: number
    }
    aws_pinpoint_adm_channel: {
      application_id: string
      client_id: string
      client_secret: string
      enabled?: boolean
      id?: string
    }
    aws_vpc_ipv4_cidr_block_association: {
      cidr_block: string
      id?: string
      vpc_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_sagemaker_endpoint_configuration: {
      arn?: string
      id?: string
      kms_key_arn?: string
      name?: string
      tags?: Record<string, string>
      production_variants: Array<{
        accelerator_type?: string
        initial_instance_count: number
        initial_variant_weight?: number
        instance_type: string
        model_name: string
        variant_name?: string
      }>
    }
    aws_ec2_transit_gateway_route_table_propagation: {
      id?: string
      resource_id?: string
      resource_type?: string
      transit_gateway_attachment_id: string
      transit_gateway_route_table_id: string
    }
    aws_dx_gateway: {
      amazon_side_asn: string
      id?: string
      name: string
      owner_account_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_batch_job_queue: {
      arn?: string
      compute_environments: Array<string>
      id?: string
      name: string
      priority: number
      state: string
    }
    aws_transfer_server: {
      arn?: string
      endpoint?: string
      endpoint_type?: string
      force_destroy?: boolean
      host_key?: string
      host_key_fingerprint?: string
      id?: string
      identity_provider_type?: string
      invocation_role?: string
      logging_role?: string
      tags?: Record<string, string>
      url?: string
      endpoint_details?: {vpc_endpoint_id: string}
    }
    aws_network_interface_attachment: {
      attachment_id?: string
      device_index: number
      id?: string
      instance_id: string
      network_interface_id: string
      status?: string
    }
    aws_db_event_subscription: {
      arn?: string
      customer_aws_id?: string
      enabled?: boolean
      event_categories?: Array<string>
      id?: string
      name?: string
      name_prefix?: string
      sns_topic: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_s3_bucket: {
      acceleration_status?: string
      acl?: string
      arn?: string
      bucket?: string
      bucket_domain_name?: string
      bucket_prefix?: string
      bucket_regional_domain_name?: string
      force_destroy?: boolean
      hosted_zone_id?: string
      id?: string
      policy?: string
      region?: string
      request_payer?: string
      tags?: Record<string, string>
      website_domain?: string
      website_endpoint?: string
      cors_rule?: Array<{
        allowed_headers?: Array<string>
        allowed_methods: Array<string>
        allowed_origins: Array<string>
        expose_headers?: Array<string>
        max_age_seconds?: number
      }>
      grant?: Array<{id?: string; permissions: Array<string>; type: string; uri?: string}>
      lifecycle_rule?: Array<{
        abort_incomplete_multipart_upload_days?: number
        enabled: boolean
        id?: string
        prefix?: string
        tags?: Record<string, string>
        expiration?: {date?: string; days?: number; expired_object_delete_marker?: boolean}
        noncurrent_version_expiration?: {days?: number}
        noncurrent_version_transition?: Array<{days?: number; storage_class: string}>
        transition?: Array<{date?: string; days?: number; storage_class: string}>
      }>
      logging?: Array<{target_bucket: string; target_prefix?: string}>
      object_lock_configuration?: {
        object_lock_enabled: string
        rule?: {default_retention: {days?: number; mode: string; years?: number}}
      }
      replication_configuration?: {
        role: string
        rules: Array<{
          id?: string
          prefix?: string
          priority?: number
          status: string
          destination: {
            account_id?: string
            bucket: string
            replica_kms_key_id?: string
            storage_class?: string
            access_control_translation?: {owner: string}
          }
          filter?: {prefix?: string; tags?: Record<string, string>}
          source_selection_criteria?: {sse_kms_encrypted_objects?: {enabled: boolean}}
        }>
      }
      server_side_encryption_configuration?: {
        rule: {apply_server_side_encryption_by_default: {kms_master_key_id?: string; sse_algorithm: string}}
      }
      versioning?: {enabled?: boolean; mfa_delete?: boolean}
      website?: {
        error_document?: string
        index_document?: string
        redirect_all_requests_to?: string
        routing_rules?: string
      }
    }
    aws_opsworks_memcached_layer: {
      allocated_memory?: number
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_iam_service_linked_role: {
      arn?: string
      aws_service_name: string
      create_date?: string
      custom_suffix?: string
      description?: string
      id?: string
      name?: string
      path?: string
      unique_id?: string
    }
    aws_service_discovery_http_namespace: {arn?: string; description?: string; id?: string; name: string}
    aws_lambda_event_source_mapping: {
      batch_size?: number
      bisect_batch_on_function_error?: boolean
      enabled?: boolean
      event_source_arn: string
      function_arn?: string
      function_name: string
      id?: string
      last_modified?: string
      last_processing_result?: string
      maximum_batching_window_in_seconds?: number
      maximum_record_age_in_seconds?: number
      maximum_retry_attempts?: number
      parallelization_factor?: number
      starting_position?: string
      starting_position_timestamp?: string
      state?: string
      state_transition_reason?: string
      uuid?: string
      destination_config?: {on_failure?: {destination_arn: string}}
    }
    aws_iam_openid_connect_provider: {
      arn?: string
      client_id_list: Array<string>
      id?: string
      thumbprint_list: Array<string>
      url: string
    }
    aws_ram_resource_share_accepter: {
      id?: string
      invitation_arn?: string
      receiver_account_id?: string
      resources?: Array<string>
      sender_account_id?: string
      share_arn: string
      share_id?: string
      share_name?: string
      status?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_nat_gateway: {
      allocation_id: string
      id?: string
      network_interface_id?: string
      private_ip?: string
      public_ip?: string
      subnet_id: string
      tags?: Record<string, string>
    }
    aws_mq_broker: {
      apply_immediately?: boolean
      arn?: string
      auto_minor_version_upgrade?: boolean
      broker_name: string
      deployment_mode?: string
      engine_type: string
      engine_version: string
      host_instance_type: string
      id?: string
      instances?: Array<{console_url: string; endpoints: Array<string>; ip_address: string}>
      publicly_accessible?: boolean
      security_groups: Array<string>
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      configuration?: {id?: string; revision?: number}
      encryption_options?: {kms_key_id?: string; use_aws_owned_key?: boolean}
      logs?: {audit?: boolean; general?: boolean}
      maintenance_window_start_time?: {day_of_week: string; time_of_day: string; time_zone: string}
      user: Array<{console_access?: boolean; groups?: Array<string>; password: string; username: string}>
    }
    aws_cloudwatch_metric_alarm: {
      actions_enabled?: boolean
      alarm_actions?: Array<string>
      alarm_description?: string
      alarm_name: string
      arn?: string
      comparison_operator: string
      datapoints_to_alarm?: number
      dimensions?: Record<string, string>
      evaluate_low_sample_count_percentiles?: string
      evaluation_periods: number
      extended_statistic?: string
      id?: string
      insufficient_data_actions?: Array<string>
      metric_name?: string
      namespace?: string
      ok_actions?: Array<string>
      period?: number
      statistic?: string
      tags?: Record<string, string>
      threshold?: number
      threshold_metric_id?: string
      treat_missing_data?: string
      unit?: string
      metric_query?: Array<{
        expression?: string
        id: string
        label?: string
        return_data?: boolean
        metric?: {
          dimensions?: Record<string, string>
          metric_name: string
          namespace?: string
          period: number
          stat: string
          unit?: string
        }
      }>
    }
    aws_appmesh_route: {
      arn?: string
      created_date?: string
      id?: string
      last_updated_date?: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
      virtual_router_name: string
      spec: {
        priority?: number
        http_route?: {
          action: {weighted_target: Array<{virtual_node: string; weight: number}>}
          match: {
            method?: string
            prefix: string
            scheme?: string
            header?: Array<{
              invert?: boolean
              name: string
              match?: {
                exact?: string
                prefix?: string
                regex?: string
                suffix?: string
                range?: {end: number; start: number}
              }
            }>
          }
        }
        tcp_route?: {action: {weighted_target: Array<{virtual_node: string; weight: number}>}}
      }
    }
    aws_cloud9_environment_ec2: {
      arn?: string
      automatic_stop_time_minutes?: number
      description?: string
      id?: string
      instance_type: string
      name: string
      owner_arn?: string
      subnet_id?: string
      tags?: Record<string, string>
      type?: string
    }
    aws_wafv2_rule_group: {
      arn?: string
      capacity: number
      description?: string
      id?: string
      lock_token?: string
      name: string
      scope: string
      tags?: Record<string, string>
      rule?: Array<{
        name: string
        priority: number
        action: {allow?: {}; block?: {}; count?: {}}
        statement: {
          and_statement?: {
            statement: Array<{
              and_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              byte_match_statement?: {
                positional_constraint: string
                search_string: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              geo_match_statement?: {country_codes: Array<string>}
              ip_set_reference_statement?: {arn: string}
              not_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              or_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              regex_pattern_set_reference_statement?: {
                arn: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              size_constraint_statement?: {
                comparison_operator: string
                size: number
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              sqli_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              xss_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
            }>
          }
          byte_match_statement?: {
            positional_constraint: string
            search_string: string
            field_to_match?: {
              all_query_arguments?: {}
              body?: {}
              method?: {}
              query_string?: {}
              single_header?: {name: string}
              single_query_argument?: {name: string}
              uri_path?: {}
            }
            text_transformation: Array<{priority: number; type: string}>
          }
          geo_match_statement?: {country_codes: Array<string>}
          ip_set_reference_statement?: {arn: string}
          not_statement?: {
            statement: Array<{
              and_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              byte_match_statement?: {
                positional_constraint: string
                search_string: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              geo_match_statement?: {country_codes: Array<string>}
              ip_set_reference_statement?: {arn: string}
              not_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              or_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              regex_pattern_set_reference_statement?: {
                arn: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              size_constraint_statement?: {
                comparison_operator: string
                size: number
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              sqli_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              xss_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
            }>
          }
          or_statement?: {
            statement: Array<{
              and_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              byte_match_statement?: {
                positional_constraint: string
                search_string: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              geo_match_statement?: {country_codes: Array<string>}
              ip_set_reference_statement?: {arn: string}
              not_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              or_statement?: {
                statement: Array<{
                  byte_match_statement?: {
                    positional_constraint: string
                    search_string: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  geo_match_statement?: {country_codes: Array<string>}
                  ip_set_reference_statement?: {arn: string}
                  regex_pattern_set_reference_statement?: {
                    arn: string
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  size_constraint_statement?: {
                    comparison_operator: string
                    size: number
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  sqli_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                  xss_match_statement?: {
                    field_to_match?: {
                      all_query_arguments?: {}
                      body?: {}
                      method?: {}
                      query_string?: {}
                      single_header?: {name: string}
                      single_query_argument?: {name: string}
                      uri_path?: {}
                    }
                    text_transformation: Array<{priority: number; type: string}>
                  }
                }>
              }
              regex_pattern_set_reference_statement?: {
                arn: string
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              size_constraint_statement?: {
                comparison_operator: string
                size: number
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              sqli_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
              xss_match_statement?: {
                field_to_match?: {
                  all_query_arguments?: {}
                  body?: {}
                  method?: {}
                  query_string?: {}
                  single_header?: {name: string}
                  single_query_argument?: {name: string}
                  uri_path?: {}
                }
                text_transformation: Array<{priority: number; type: string}>
              }
            }>
          }
          regex_pattern_set_reference_statement?: {
            arn: string
            field_to_match?: {
              all_query_arguments?: {}
              body?: {}
              method?: {}
              query_string?: {}
              single_header?: {name: string}
              single_query_argument?: {name: string}
              uri_path?: {}
            }
            text_transformation: Array<{priority: number; type: string}>
          }
          size_constraint_statement?: {
            comparison_operator: string
            size: number
            field_to_match?: {
              all_query_arguments?: {}
              body?: {}
              method?: {}
              query_string?: {}
              single_header?: {name: string}
              single_query_argument?: {name: string}
              uri_path?: {}
            }
            text_transformation: Array<{priority: number; type: string}>
          }
          sqli_match_statement?: {
            field_to_match?: {
              all_query_arguments?: {}
              body?: {}
              method?: {}
              query_string?: {}
              single_header?: {name: string}
              single_query_argument?: {name: string}
              uri_path?: {}
            }
            text_transformation: Array<{priority: number; type: string}>
          }
          xss_match_statement?: {
            field_to_match?: {
              all_query_arguments?: {}
              body?: {}
              method?: {}
              query_string?: {}
              single_header?: {name: string}
              single_query_argument?: {name: string}
              uri_path?: {}
            }
            text_transformation: Array<{priority: number; type: string}>
          }
        }
        visibility_config: {cloudwatch_metrics_enabled: boolean; metric_name: string; sampled_requests_enabled: boolean}
      }>
      visibility_config: {cloudwatch_metrics_enabled: boolean; metric_name: string; sampled_requests_enabled: boolean}
    }
    aws_ssm_maintenance_window_target: {
      description?: string
      id?: string
      name?: string
      owner_information?: string
      resource_type: string
      window_id: string
      targets: Array<{key: string; values: Array<string>}>
    }
    aws_cloudwatch_log_metric_filter: {
      id?: string
      log_group_name: string
      name: string
      pattern: string
      metric_transformation: {default_value?: string; name: string; namespace: string; value: string}
    }
    aws_iot_policy_attachment: {id?: string; policy: string; target: string}
    aws_waf_size_constraint_set: {
      arn?: string
      id?: string
      name: string
      size_constraints?: Array<{
        comparison_operator: string
        size: number
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_appsync_function: {
      api_id: string
      arn?: string
      data_source: string
      description?: string
      function_id?: string
      function_version?: string
      id?: string
      name: string
      request_mapping_template: string
      response_mapping_template: string
    }
    aws_organizations_policy: {
      arn?: string
      content: string
      description?: string
      id?: string
      name: string
      type?: string
    }
    aws_api_gateway_authorizer: {
      authorizer_credentials?: string
      authorizer_result_ttl_in_seconds?: number
      authorizer_uri?: string
      id?: string
      identity_source?: string
      identity_validation_expression?: string
      name: string
      provider_arns?: Array<string>
      rest_api_id: string
      type?: string
    }
    aws_quicksight_user: {
      arn?: string
      aws_account_id?: string
      email: string
      iam_arn?: string
      id?: string
      identity_type: string
      namespace?: string
      session_name?: string
      user_name?: string
      user_role: string
    }
    aws_iam_user_policy: {id?: string; name?: string; name_prefix?: string; policy: string; user: string}
    aws_wafregional_rule_group: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      activated_rule?: Array<{priority: number; rule_id: string; type?: string; action: {type: string}}>
    }
    aws_dx_gateway_association: {
      allowed_prefixes?: Array<string>
      associated_gateway_id?: string
      associated_gateway_owner_account_id?: string
      associated_gateway_type?: string
      dx_gateway_association_id?: string
      dx_gateway_id: string
      dx_gateway_owner_account_id?: string
      id?: string
      proposal_id?: string
      vpn_gateway_id?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_opsworks_nodejs_app_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      nodejs_version?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_dx_public_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      id?: string
      name: string
      route_filter_prefixes: Array<string>
      tags?: Record<string, string>
      vlan: number
      timeouts?: {create?: string; delete?: string}
    }
    aws_codecommit_repository: {
      arn?: string
      clone_url_http?: string
      clone_url_ssh?: string
      default_branch?: string
      description?: string
      id?: string
      repository_id?: string
      repository_name: string
      tags?: Record<string, string>
    }
    aws_datasync_task: {
      arn?: string
      cloudwatch_log_group_arn?: string
      destination_location_arn: string
      id?: string
      name?: string
      source_location_arn: string
      tags?: Record<string, string>
      options?: {
        atime?: string
        bytes_per_second?: number
        gid?: string
        mtime?: string
        posix_permissions?: string
        preserve_deleted_files?: string
        preserve_devices?: string
        uid?: string
        verify_mode?: string
      }
      timeouts?: {create?: string}
    }
    aws_cloudwatch_log_stream: {arn?: string; id?: string; log_group_name: string; name: string}
    aws_elasticache_security_group: {
      description?: string
      id?: string
      name: string
      security_group_names: Array<string>
    }
    aws_ec2_transit_gateway_vpc_attachment_accepter: {
      dns_support?: string
      id?: string
      ipv6_support?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      transit_gateway_attachment_id: string
      transit_gateway_default_route_table_association?: boolean
      transit_gateway_default_route_table_propagation?: boolean
      transit_gateway_id?: string
      vpc_id?: string
      vpc_owner_id?: string
    }
    aws_codedeploy_deployment_group: {
      app_name: string
      autoscaling_groups?: Array<string>
      deployment_config_name?: string
      deployment_group_name: string
      id?: string
      service_role_arn: string
      alarm_configuration?: {alarms?: Array<string>; enabled?: boolean; ignore_poll_alarm_failure?: boolean}
      auto_rollback_configuration?: {enabled?: boolean; events?: Array<string>}
      blue_green_deployment_config?: {
        deployment_ready_option?: {action_on_timeout?: string; wait_time_in_minutes?: number}
        green_fleet_provisioning_option?: {action?: string}
        terminate_blue_instances_on_deployment_success?: {action?: string; termination_wait_time_in_minutes?: number}
      }
      deployment_style?: {deployment_option?: string; deployment_type?: string}
      ec2_tag_filter?: Array<{key?: string; type?: string; value?: string}>
      ec2_tag_set?: Array<{ec2_tag_filter?: Array<{key?: string; type?: string; value?: string}>}>
      ecs_service?: {cluster_name: string; service_name: string}
      load_balancer_info?: {
        elb_info?: Array<{name?: string}>
        target_group_info?: Array<{name?: string}>
        target_group_pair_info?: {
          prod_traffic_route: {listener_arns: Array<string>}
          target_group: Array<{name: string}>
          test_traffic_route?: {listener_arns: Array<string>}
        }
      }
      on_premises_instance_tag_filter?: Array<{key?: string; type?: string; value?: string}>
      trigger_configuration?: Array<{trigger_events: Array<string>; trigger_name: string; trigger_target_arn: string}>
    }
    aws_globalaccelerator_accelerator: {
      dns_name?: string
      enabled?: boolean
      hosted_zone_id?: string
      id?: string
      ip_address_type?: string
      ip_sets?: Array<{ip_addresses: Array<string>; ip_family: string}>
      name: string
      tags?: Record<string, string>
      attributes?: {flow_logs_enabled?: boolean; flow_logs_s3_bucket?: string; flow_logs_s3_prefix?: string}
    }
    aws_cur_report_definition: {
      additional_artifacts?: Array<string>
      additional_schema_elements: Array<string>
      compression: string
      format: string
      id?: string
      report_name: string
      s3_bucket: string
      s3_prefix?: string
      s3_region: string
      time_unit: string
    }
    aws_glue_trigger: {
      arn?: string
      description?: string
      enabled?: boolean
      id?: string
      name: string
      schedule?: string
      tags?: Record<string, string>
      type: string
      workflow_name?: string
      actions: Array<{arguments?: Record<string, string>; crawler_name?: string; job_name?: string; timeout?: number}>
      predicate?: {
        logical?: string
        conditions: Array<{
          crawl_state?: string
          crawler_name?: string
          job_name?: string
          logical_operator?: string
          state?: string
        }>
      }
      timeouts?: {create?: string; delete?: string}
    }
    aws_api_gateway_request_validator: {
      id?: string
      name: string
      rest_api_id: string
      validate_request_body?: boolean
      validate_request_parameters?: boolean
    }
    aws_vpc_peering_connection_options: {
      id?: string
      vpc_peering_connection_id: string
      accepter?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
      requester?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
    }
    aws_vpc_endpoint: {
      auto_accept?: boolean
      cidr_blocks?: Array<string>
      dns_entry?: Array<{dns_name: string; hosted_zone_id: string}>
      id?: string
      network_interface_ids?: Array<string>
      owner_id?: string
      policy?: string
      prefix_list_id?: string
      private_dns_enabled?: boolean
      requester_managed?: boolean
      route_table_ids?: Array<string>
      security_group_ids?: Array<string>
      service_name: string
      state?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      vpc_endpoint_type?: string
      vpc_id: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_storagegateway_nfs_file_share: {
      arn?: string
      client_list: Array<string>
      default_storage_class?: string
      fileshare_id?: string
      gateway_arn: string
      guess_mime_type_enabled?: boolean
      id?: string
      kms_encrypted?: boolean
      kms_key_arn?: string
      location_arn: string
      object_acl?: string
      path?: string
      read_only?: boolean
      requester_pays?: boolean
      role_arn: string
      squash?: string
      tags?: Record<string, string>
      nfs_file_share_defaults?: {directory_mode?: string; file_mode?: string; group_id?: number; owner_id?: number}
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_iam_access_key: {
      encrypted_secret?: string
      id?: string
      key_fingerprint?: string
      pgp_key?: string
      secret?: string
      ses_smtp_password?: string
      ses_smtp_password_v4?: string
      status?: string
      user: string
    }
    aws_neptune_subnet_group: {
      arn?: string
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_sns_sms_preferences: {
      default_sender_id?: string
      default_sms_type?: string
      delivery_status_iam_role_arn?: string
      delivery_status_success_sampling_rate?: string
      id?: string
      monthly_spend_limit?: string
      usage_report_s3_bucket?: string
    }
    aws_cloudfront_public_key: {
      caller_reference?: string
      comment?: string
      encoded_key: string
      etag?: string
      id?: string
      name?: string
      name_prefix?: string
    }
    aws_storagegateway_gateway: {
      activation_key?: string
      arn?: string
      cloudwatch_log_group_arn?: string
      gateway_id?: string
      gateway_ip_address?: string
      gateway_name: string
      gateway_timezone: string
      gateway_type?: string
      gateway_vpc_endpoint?: string
      id?: string
      medium_changer_type?: string
      smb_guest_password?: string
      tags?: Record<string, string>
      tape_drive_type?: string
      smb_active_directory_settings?: {domain_name: string; password: string; username: string}
      timeouts?: {create?: string}
    }
    aws_waf_web_acl: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      default_action: {type: string}
      logging_configuration?: {
        log_destination: string
        redacted_fields?: {field_to_match: Array<{data?: string; type: string}>}
      }
      rules?: Array<{
        priority: number
        rule_id: string
        type?: string
        action?: {type: string}
        override_action?: {type: string}
      }>
    }
    aws_waf_regex_pattern_set: {arn?: string; id?: string; name: string; regex_pattern_strings?: Array<string>}
    aws_athena_workgroup: {
      arn?: string
      description?: string
      force_destroy?: boolean
      id?: string
      name: string
      state?: string
      tags?: Record<string, string>
      configuration?: {
        bytes_scanned_cutoff_per_query?: number
        enforce_workgroup_configuration?: boolean
        publish_cloudwatch_metrics_enabled?: boolean
        result_configuration?: {
          output_location?: string
          encryption_configuration?: {encryption_option?: string; kms_key_arn?: string}
        }
      }
    }
    aws_alb_listener_rule: {
      arn?: string
      id?: string
      listener_arn: string
      priority?: number
      action: Array<{
        order?: number
        target_group_arn?: string
        type: string
        authenticate_cognito?: {
          authentication_request_extra_params?: Record<string, string>
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }
        authenticate_oidc?: {
          authentication_request_extra_params?: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          token_endpoint: string
          user_info_endpoint: string
        }
        fixed_response?: {content_type: string; message_body?: string; status_code?: string}
        forward?: {
          stickiness?: {duration: number; enabled?: boolean}
          target_group: Array<{arn: string; weight?: number}>
        }
        redirect?: {host?: string; path?: string; port?: string; protocol?: string; query?: string; status_code: string}
      }>
      condition: Array<{
        field?: string
        values?: Array<string>
        host_header?: {values?: Array<string>}
        http_header?: {http_header_name: string; values: Array<string>}
        http_request_method?: {values: Array<string>}
        path_pattern?: {values?: Array<string>}
        query_string?: Array<{key?: string; value: string}>
        source_ip?: {values: Array<string>}
      }>
    }
    aws_app_cookie_stickiness_policy: {
      cookie_name: string
      id?: string
      lb_port: number
      load_balancer: string
      name: string
    }
    aws_appsync_datasource: {
      api_id: string
      arn?: string
      description?: string
      id?: string
      name: string
      service_role_arn?: string
      type: string
      dynamodb_config?: {region?: string; table_name: string; use_caller_credentials?: boolean}
      elasticsearch_config?: {endpoint: string; region?: string}
      http_config?: {endpoint: string}
      lambda_config?: {function_arn: string}
    }
    aws_guardduty_detector: {account_id?: string; enable?: boolean; finding_publishing_frequency?: string; id?: string}
    aws_redshift_snapshot_copy_grant: {
      arn?: string
      id?: string
      kms_key_id?: string
      snapshot_copy_grant_name: string
      tags?: Record<string, string>
    }
    aws_codestarnotifications_notification_rule: {
      arn?: string
      detail_type: string
      event_type_ids: Array<string>
      id?: string
      name: string
      resource: string
      status?: string
      tags?: Record<string, string>
      target?: Array<{address: string; status?: string; type?: string}>
    }
    aws_dx_hosted_public_virtual_interface_accepter: {
      arn?: string
      id?: string
      tags?: Record<string, string>
      virtual_interface_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_organizations_organizational_unit: {
      accounts?: Array<{arn: string; email: string; id: string; name: string}>
      arn?: string
      id?: string
      name: string
      parent_id: string
    }
    aws_ami_launch_permission: {account_id: string; id?: string; image_id: string}
    aws_lambda_permission: {
      action: string
      event_source_token?: string
      function_name: string
      id?: string
      principal: string
      qualifier?: string
      source_account?: string
      source_arn?: string
      statement_id?: string
      statement_id_prefix?: string
    }
    aws_sfn_activity: {creation_date?: string; id?: string; name: string; tags?: Record<string, string>}
    aws_cloudwatch_log_subscription_filter: {
      destination_arn: string
      distribution?: string
      filter_pattern: string
      id?: string
      log_group_name: string
      name: string
      role_arn?: string
    }
    aws_dx_hosted_transit_virtual_interface_accepter: {
      arn?: string
      dx_gateway_id: string
      id?: string
      tags?: Record<string, string>
      virtual_interface_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_sns_topic_policy: {arn: string; id?: string; policy: string}
    aws_opsworks_stack: {
      agent_version?: string
      arn?: string
      berkshelf_version?: string
      color?: string
      configuration_manager_name?: string
      configuration_manager_version?: string
      custom_json?: string
      default_availability_zone?: string
      default_instance_profile_arn: string
      default_os?: string
      default_root_device_type?: string
      default_ssh_key_name?: string
      default_subnet_id?: string
      hostname_theme?: string
      id?: string
      manage_berkshelf?: boolean
      name: string
      region: string
      service_role_arn: string
      stack_endpoint?: string
      tags?: Record<string, string>
      use_custom_cookbooks?: boolean
      use_opsworks_security_groups?: boolean
      vpc_id?: string
      custom_cookbooks_source?: Array<{
        password?: string
        revision?: string
        ssh_key?: string
        type: string
        url: string
        username?: string
      }>
    }
    aws_vpc_dhcp_options_association: {dhcp_options_id: string; id?: string; vpc_id: string}
    aws_ec2_traffic_mirror_filter: {
      description?: string
      id?: string
      network_services?: Array<string>
      tags?: Record<string, string>
    }
    aws_media_store_container_policy: {container_name: string; id?: string; policy: string}
    aws_vpn_connection: {
      customer_gateway_configuration?: string
      customer_gateway_id: string
      id?: string
      routes?: Array<{destination_cidr_block: string; source: string; state: string}>
      static_routes_only?: boolean
      tags?: Record<string, string>
      transit_gateway_attachment_id?: string
      transit_gateway_id?: string
      tunnel1_address?: string
      tunnel1_bgp_asn?: string
      tunnel1_bgp_holdtime?: number
      tunnel1_cgw_inside_address?: string
      tunnel1_inside_cidr?: string
      tunnel1_preshared_key?: string
      tunnel1_vgw_inside_address?: string
      tunnel2_address?: string
      tunnel2_bgp_asn?: string
      tunnel2_bgp_holdtime?: number
      tunnel2_cgw_inside_address?: string
      tunnel2_inside_cidr?: string
      tunnel2_preshared_key?: string
      tunnel2_vgw_inside_address?: string
      type: string
      vgw_telemetry?: Array<{
        accepted_route_count: number
        last_status_change: string
        outside_ip_address: string
        status: string
        status_message: string
      }>
      vpn_gateway_id?: string
    }
    aws_shield_protection: {id?: string; name: string; resource_arn: string}
    aws_accessanalyzer_analyzer: {
      analyzer_name: string
      arn?: string
      id?: string
      tags?: Record<string, string>
      type?: string
    }
    aws_dx_hosted_public_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      id?: string
      name: string
      owner_account_id: string
      route_filter_prefixes: Array<string>
      vlan: number
      timeouts?: {create?: string; delete?: string}
    }
    aws_alb_target_group: {
      arn?: string
      arn_suffix?: string
      deregistration_delay?: number
      id?: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type?: string
      name?: string
      name_prefix?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
      health_check?: {
        enabled?: boolean
        healthy_threshold?: number
        interval?: number
        matcher?: string
        path?: string
        port?: string
        protocol?: string
        timeout?: number
        unhealthy_threshold?: number
      }
      stickiness?: {cookie_duration?: number; enabled?: boolean; type: string}
    }
    aws_autoscaling_group: {
      arn?: string
      availability_zones?: Array<string>
      default_cooldown?: number
      desired_capacity?: number
      enabled_metrics?: Array<string>
      force_delete?: boolean
      health_check_grace_period?: number
      health_check_type?: string
      id?: string
      launch_configuration?: string
      load_balancers?: Array<string>
      max_instance_lifetime?: number
      max_size: number
      metrics_granularity?: string
      min_elb_capacity?: number
      min_size: number
      name?: string
      name_prefix?: string
      placement_group?: string
      protect_from_scale_in?: boolean
      service_linked_role_arn?: string
      suspended_processes?: Array<string>
      tags?: Array<Record<string, string>>
      target_group_arns?: Array<string>
      termination_policies?: Array<string>
      vpc_zone_identifier?: Array<string>
      wait_for_capacity_timeout?: string
      wait_for_elb_capacity?: number
      initial_lifecycle_hook?: Array<{
        default_result?: string
        heartbeat_timeout?: number
        lifecycle_transition: string
        name: string
        notification_metadata?: string
        notification_target_arn?: string
        role_arn?: string
      }>
      launch_template?: {id?: string; name?: string; version?: string}
      mixed_instances_policy?: {
        instances_distribution?: {
          on_demand_allocation_strategy?: string
          on_demand_base_capacity?: number
          on_demand_percentage_above_base_capacity?: number
          spot_allocation_strategy?: string
          spot_instance_pools?: number
          spot_max_price?: string
        }
        launch_template: {
          launch_template_specification: {launch_template_id?: string; launch_template_name?: string; version?: string}
          override?: Array<{instance_type?: string; weighted_capacity?: string}>
        }
      }
      tag?: Array<{key: string; propagate_at_launch: boolean; value: string}>
      timeouts?: {delete?: string}
    }
    aws_ram_resource_share: {
      allow_external_principals?: boolean
      arn?: string
      id?: string
      name: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string}
    }
    aws_gamelift_alias: {
      arn?: string
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      routing_strategy: {fleet_id?: string; message?: string; type: string}
    }
    aws_route_table: {
      id?: string
      owner_id?: string
      propagating_vgws?: Array<string>
      route?: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_waf_rate_based_rule: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      rate_key: string
      rate_limit: number
      tags?: Record<string, string>
      predicates?: Array<{data_id: string; negated: boolean; type: string}>
    }
    aws_storagegateway_upload_buffer: {disk_id: string; gateway_arn: string; id?: string}
    aws_instance: {
      ami: string
      arn?: string
      associate_public_ip_address?: boolean
      availability_zone?: string
      cpu_core_count?: number
      cpu_threads_per_core?: number
      disable_api_termination?: boolean
      ebs_optimized?: boolean
      get_password_data?: boolean
      hibernation?: boolean
      host_id?: string
      iam_instance_profile?: string
      id?: string
      instance_initiated_shutdown_behavior?: string
      instance_state?: string
      instance_type: string
      ipv6_address_count?: number
      ipv6_addresses?: Array<string>
      key_name?: string
      monitoring?: boolean
      network_interface_id?: string
      outpost_arn?: string
      password_data?: string
      placement_group?: string
      primary_network_interface_id?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      security_groups?: Array<string>
      source_dest_check?: boolean
      subnet_id?: string
      tags?: Record<string, string>
      tenancy?: string
      user_data?: string
      user_data_base64?: string
      volume_tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      credit_specification?: {cpu_credits?: string}
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name: string
        encrypted?: boolean
        iops?: number
        kms_key_id?: string
        snapshot_id?: string
        volume_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name: string; no_device?: boolean; virtual_name?: string}>
      metadata_options?: {http_endpoint?: string; http_put_response_hop_limit?: number; http_tokens?: string}
      network_interface?: Array<{delete_on_termination?: boolean; device_index: number; network_interface_id: string}>
      root_block_device?: {
        delete_on_termination?: boolean
        device_name?: string
        encrypted?: boolean
        iops?: number
        kms_key_id?: string
        volume_id?: string
        volume_size?: number
        volume_type?: string
      }
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_wafregional_web_acl: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      default_action: {type: string}
      logging_configuration?: {
        log_destination: string
        redacted_fields?: {field_to_match: Array<{data?: string; type: string}>}
      }
      rule?: Array<{
        priority: number
        rule_id: string
        type?: string
        action?: {type: string}
        override_action?: {type: string}
      }>
    }
    aws_cognito_resource_server: {
      id?: string
      identifier: string
      name: string
      scope_identifiers?: Array<string>
      user_pool_id: string
      scope?: Array<{scope_description: string; scope_name: string}>
    }
    aws_worklink_website_certificate_authority_association: {
      certificate: string
      display_name?: string
      fleet_arn: string
      id?: string
      website_ca_id?: string
    }
    aws_appautoscaling_target: {
      id?: string
      max_capacity: number
      min_capacity: number
      resource_id: string
      role_arn?: string
      scalable_dimension: string
      service_namespace: string
    }
    aws_ses_identity_policy: {id?: string; identity: string; name: string; policy: string}
    aws_lb_cookie_stickiness_policy: {
      cookie_expiration_period?: number
      id?: string
      lb_port: number
      load_balancer: string
      name: string
    }
    aws_sns_topic: {
      application_failure_feedback_role_arn?: string
      application_success_feedback_role_arn?: string
      application_success_feedback_sample_rate?: number
      arn?: string
      delivery_policy?: string
      display_name?: string
      http_failure_feedback_role_arn?: string
      http_success_feedback_role_arn?: string
      http_success_feedback_sample_rate?: number
      id?: string
      kms_master_key_id?: string
      lambda_failure_feedback_role_arn?: string
      lambda_success_feedback_role_arn?: string
      lambda_success_feedback_sample_rate?: number
      name?: string
      name_prefix?: string
      policy?: string
      sqs_failure_feedback_role_arn?: string
      sqs_success_feedback_role_arn?: string
      sqs_success_feedback_sample_rate?: number
      tags?: Record<string, string>
    }
    aws_apigatewayv2_vpc_link: {
      arn?: string
      id?: string
      name: string
      security_group_ids: Array<string>
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_guardduty_ipset: {
      activate: boolean
      detector_id: string
      format: string
      id?: string
      location: string
      name: string
    }
    aws_opsworks_static_web_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_iam_role_policy: {id?: string; name?: string; name_prefix?: string; policy: string; role: string}
    aws_spot_fleet_request: {
      allocation_strategy?: string
      client_token?: string
      excess_capacity_termination_policy?: string
      fleet_type?: string
      iam_fleet_role: string
      id?: string
      instance_interruption_behaviour?: string
      instance_pools_to_use_count?: number
      load_balancers?: Array<string>
      replace_unhealthy_instances?: boolean
      spot_price?: string
      spot_request_state?: string
      tags?: Record<string, string>
      target_capacity: number
      target_group_arns?: Array<string>
      terminate_instances_with_expiration?: boolean
      valid_from?: string
      valid_until?: string
      wait_for_fulfillment?: boolean
      launch_specification?: Array<{
        ami: string
        associate_public_ip_address?: boolean
        availability_zone?: string
        ebs_optimized?: boolean
        iam_instance_profile?: string
        iam_instance_profile_arn?: string
        instance_type: string
        key_name?: string
        monitoring?: boolean
        placement_group?: string
        placement_tenancy?: string
        spot_price?: string
        subnet_id?: string
        tags?: Record<string, string>
        user_data?: string
        vpc_security_group_ids?: Array<string>
        weighted_capacity?: string
        ebs_block_device?: Array<{
          delete_on_termination?: boolean
          device_name: string
          encrypted?: boolean
          iops?: number
          kms_key_id?: string
          snapshot_id?: string
          volume_size?: number
          volume_type?: string
        }>
        ephemeral_block_device?: Array<{device_name: string; virtual_name: string}>
        root_block_device?: Array<{
          delete_on_termination?: boolean
          encrypted?: boolean
          iops?: number
          kms_key_id?: string
          volume_size?: number
          volume_type?: string
        }>
      }>
      launch_template_config?: Array<{
        launch_template_specification: {id?: string; name?: string; version?: string}
        overrides?: Array<{
          availability_zone?: string
          instance_type?: string
          priority?: number
          spot_price?: string
          subnet_id?: string
          weighted_capacity?: number
        }>
      }>
      timeouts?: {create?: string; delete?: string}
    }
    aws_ec2_transit_gateway_peering_attachment_accepter: {
      id?: string
      peer_account_id?: string
      peer_region?: string
      peer_transit_gateway_id?: string
      tags?: Record<string, string>
      transit_gateway_attachment_id: string
      transit_gateway_id?: string
    }
    aws_iam_group_policy: {group: string; id?: string; name?: string; name_prefix?: string; policy: string}
    aws_ec2_transit_gateway_peering_attachment: {
      id?: string
      peer_account_id?: string
      peer_region: string
      peer_transit_gateway_id: string
      tags?: Record<string, string>
      transit_gateway_id: string
    }
    aws_neptune_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name: string
      tags?: Record<string, string>
      parameter?: Array<{apply_method?: string; name: string; value: string}>
    }
    aws_dms_endpoint: {
      certificate_arn?: string
      database_name?: string
      endpoint_arn?: string
      endpoint_id: string
      endpoint_type: string
      engine_name: string
      extra_connection_attributes?: string
      id?: string
      kms_key_arn?: string
      password?: string
      port?: number
      server_name?: string
      service_access_role?: string
      ssl_mode?: string
      tags?: Record<string, string>
      username?: string
      elasticsearch_settings?: {
        endpoint_uri: string
        error_retry_duration?: number
        full_load_error_percentage?: number
        service_access_role_arn: string
      }
      kafka_settings?: {broker: string; topic?: string}
      kinesis_settings?: {message_format?: string; service_access_role_arn?: string; stream_arn?: string}
      mongodb_settings?: {
        auth_mechanism?: string
        auth_source?: string
        auth_type?: string
        docs_to_investigate?: string
        extract_doc_id?: string
        nesting_level?: string
      }
      s3_settings?: {
        bucket_folder?: string
        bucket_name?: string
        compression_type?: string
        csv_delimiter?: string
        csv_row_delimiter?: string
        external_table_definition?: string
        service_access_role_arn?: string
      }
    }
    aws_db_subnet_group: {
      arn?: string
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_kms_grant: {
      grant_creation_tokens?: Array<string>
      grant_id?: string
      grant_token?: string
      grantee_principal: string
      id?: string
      key_id: string
      name?: string
      operations: Array<string>
      retire_on_delete?: boolean
      retiring_principal?: string
      constraints?: Array<{
        encryption_context_equals?: Record<string, string>
        encryption_context_subset?: Record<string, string>
      }>
    }
    aws_api_gateway_account: {
      cloudwatch_role_arn?: string
      id?: string
      throttle_settings?: Array<{burst_limit: number; rate_limit: number}>
    }
    aws_ses_domain_mail_from: {behavior_on_mx_failure?: string; domain: string; id?: string; mail_from_domain: string}
    aws_iam_role: {
      arn?: string
      assume_role_policy: string
      create_date?: string
      description?: string
      force_detach_policies?: boolean
      id?: string
      max_session_duration?: number
      name?: string
      name_prefix?: string
      path?: string
      permissions_boundary?: string
      tags?: Record<string, string>
      unique_id?: string
    }
    aws_cognito_user_group: {
      description?: string
      id?: string
      name: string
      precedence?: number
      role_arn?: string
      user_pool_id: string
    }
    aws_api_gateway_documentation_part: {
      id?: string
      properties: string
      rest_api_id: string
      location: {method?: string; name?: string; path?: string; status_code?: string; type: string}
    }
    aws_vpc_endpoint_service: {
      acceptance_required: boolean
      allowed_principals?: Array<string>
      availability_zones?: Array<string>
      base_endpoint_dns_names?: Array<string>
      id?: string
      manages_vpc_endpoints?: boolean
      network_load_balancer_arns: Array<string>
      private_dns_name?: string
      service_name?: string
      service_type?: string
      state?: string
      tags?: Record<string, string>
    }
    aws_pinpoint_email_channel: {
      application_id: string
      enabled?: boolean
      from_address: string
      id?: string
      identity: string
      messages_per_second?: number
      role_arn: string
    }
    aws_ami_from_instance: {
      architecture?: string
      description?: string
      ena_support?: boolean
      id?: string
      image_location?: string
      kernel_id?: string
      manage_ebs_snapshots?: boolean
      name: string
      ramdisk_id?: string
      root_device_name?: string
      root_snapshot_id?: string
      snapshot_without_reboot?: boolean
      source_instance_id: string
      sriov_net_support?: string
      tags?: Record<string, string>
      virtualization_type?: string
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name?: string
        encrypted?: boolean
        iops?: number
        snapshot_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name?: string; virtual_name?: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_athena_database: {
      bucket: string
      force_destroy?: boolean
      id?: string
      name: string
      encryption_configuration?: {encryption_option: string; kms_key?: string}
    }
    aws_iot_policy: {arn?: string; default_version_id?: string; id?: string; name: string; policy: string}
    aws_ebs_snapshot: {
      data_encryption_key_id?: string
      description?: string
      encrypted?: boolean
      id?: string
      kms_key_id?: string
      owner_alias?: string
      owner_id?: string
      tags?: Record<string, string>
      volume_id: string
      volume_size?: number
      timeouts?: {create?: string; delete?: string}
    }
    aws_sagemaker_endpoint: {
      arn?: string
      endpoint_config_name: string
      id?: string
      name?: string
      tags?: Record<string, string>
    }
    aws_cognito_user_pool: {
      alias_attributes?: Array<string>
      arn?: string
      auto_verified_attributes?: Array<string>
      creation_date?: string
      email_verification_message?: string
      email_verification_subject?: string
      endpoint?: string
      id?: string
      last_modified_date?: string
      mfa_configuration?: string
      name: string
      sms_authentication_message?: string
      sms_verification_message?: string
      tags?: Record<string, string>
      username_attributes?: Array<string>
      admin_create_user_config?: {
        allow_admin_create_user_only?: boolean
        unused_account_validity_days?: number
        invite_message_template?: {email_message?: string; email_subject?: string; sms_message?: string}
      }
      device_configuration?: {
        challenge_required_on_new_device?: boolean
        device_only_remembered_on_user_prompt?: boolean
      }
      email_configuration?: {
        email_sending_account?: string
        from_email_address?: string
        reply_to_email_address?: string
        source_arn?: string
      }
      lambda_config?: {
        create_auth_challenge?: string
        custom_message?: string
        define_auth_challenge?: string
        post_authentication?: string
        post_confirmation?: string
        pre_authentication?: string
        pre_sign_up?: string
        pre_token_generation?: string
        user_migration?: string
        verify_auth_challenge_response?: string
      }
      password_policy?: {
        minimum_length?: number
        require_lowercase?: boolean
        require_numbers?: boolean
        require_symbols?: boolean
        require_uppercase?: boolean
        temporary_password_validity_days?: number
      }
      schema?: Array<{
        attribute_data_type: string
        developer_only_attribute?: boolean
        mutable?: boolean
        name: string
        required?: boolean
        number_attribute_constraints?: {max_value?: string; min_value?: string}
        string_attribute_constraints?: {max_length?: string; min_length?: string}
      }>
      sms_configuration?: {external_id: string; sns_caller_arn: string}
      software_token_mfa_configuration?: {enabled: boolean}
      user_pool_add_ons?: {advanced_security_mode: string}
      username_configuration?: {case_sensitive: boolean}
      verification_message_template?: {
        default_email_option?: string
        email_message?: string
        email_message_by_link?: string
        email_subject?: string
        email_subject_by_link?: string
        sms_message?: string
      }
    }
    aws_default_vpc: {
      arn?: string
      assign_generated_ipv6_cidr_block?: boolean
      cidr_block?: string
      default_network_acl_id?: string
      default_route_table_id?: string
      default_security_group_id?: string
      dhcp_options_id?: string
      enable_classiclink?: boolean
      enable_classiclink_dns_support?: boolean
      enable_dns_hostnames?: boolean
      enable_dns_support?: boolean
      id?: string
      instance_tenancy?: string
      ipv6_association_id?: string
      ipv6_cidr_block?: string
      main_route_table_id?: string
      owner_id?: string
      tags?: Record<string, string>
    }
    aws_kinesis_stream: {
      arn?: string
      encryption_type?: string
      enforce_consumer_deletion?: boolean
      id?: string
      kms_key_id?: string
      name: string
      retention_period?: number
      shard_count: number
      shard_level_metrics?: Array<string>
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_batch_job_definition: {
      arn?: string
      container_properties?: string
      id?: string
      name: string
      parameters?: Record<string, string>
      revision?: number
      type: string
      retry_strategy?: {attempts?: number}
      timeout?: {attempt_duration_seconds?: number}
    }
    aws_ec2_client_vpn_endpoint: {
      arn?: string
      client_cidr_block: string
      description?: string
      dns_name?: string
      dns_servers?: Array<string>
      id?: string
      server_certificate_arn: string
      split_tunnel?: boolean
      status?: string
      tags?: Record<string, string>
      transport_protocol?: string
      authentication_options: Array<{active_directory_id?: string; root_certificate_chain_arn?: string; type: string}>
      connection_log_options: {cloudwatch_log_group?: string; cloudwatch_log_stream?: string; enabled: boolean}
    }
    aws_mq_configuration: {
      arn?: string
      data: string
      description?: string
      engine_type: string
      engine_version: string
      id?: string
      latest_revision?: number
      name: string
      tags?: Record<string, string>
    }
    aws_sqs_queue: {
      arn?: string
      content_based_deduplication?: boolean
      delay_seconds?: number
      fifo_queue?: boolean
      id?: string
      kms_data_key_reuse_period_seconds?: number
      kms_master_key_id?: string
      max_message_size?: number
      message_retention_seconds?: number
      name?: string
      name_prefix?: string
      policy?: string
      receive_wait_time_seconds?: number
      redrive_policy?: string
      tags?: Record<string, string>
      visibility_timeout_seconds?: number
    }
    aws_kms_alias: {
      arn?: string
      id?: string
      name?: string
      name_prefix?: string
      target_key_arn?: string
      target_key_id: string
    }
    aws_opsworks_application: {
      auto_bundle_on_deploy?: string
      aws_flow_ruby_settings?: string
      data_source_arn?: string
      data_source_database_name?: string
      data_source_type?: string
      description?: string
      document_root?: string
      domains?: Array<string>
      enable_ssl?: boolean
      id?: string
      name: string
      rails_env?: string
      short_name?: string
      stack_id: string
      type: string
      app_source?: Array<{
        password?: string
        revision?: string
        ssh_key?: string
        type: string
        url?: string
        username?: string
      }>
      environment?: Array<{key: string; secure?: boolean; value: string}>
      ssl_configuration?: Array<{certificate: string; chain?: string; private_key: string}>
    }
    aws_api_gateway_method_response: {
      http_method: string
      id?: string
      resource_id: string
      response_models?: Record<string, string>
      response_parameters?: Record<string, boolean>
      response_parameters_in_json?: string
      rest_api_id: string
      status_code: string
    }
    aws_media_store_container: {
      arn?: string
      endpoint?: string
      id?: string
      name: string
      tags?: Record<string, string>
    }
    aws_opsworks_permission: {
      allow_ssh?: boolean
      allow_sudo?: boolean
      id?: string
      level?: string
      stack_id?: string
      user_arn: string
    }
    aws_swf_domain: {
      arn?: string
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      workflow_execution_retention_period_in_days: string
    }
    aws_wafregional_rate_based_rule: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      rate_key: string
      rate_limit: number
      tags?: Record<string, string>
      predicate?: Array<{data_id: string; negated: boolean; type: string}>
    }
    aws_network_acl_rule: {
      cidr_block?: string
      egress?: boolean
      from_port?: number
      icmp_code?: string
      icmp_type?: string
      id?: string
      ipv6_cidr_block?: string
      network_acl_id: string
      protocol: string
      rule_action: string
      rule_number: number
      to_port?: number
    }
    aws_vpc_endpoint_route_table_association: {id?: string; route_table_id: string; vpc_endpoint_id: string}
    aws_secretsmanager_secret_version: {
      arn?: string
      id?: string
      secret_binary?: string
      secret_id: string
      secret_string?: string
      version_id?: string
      version_stages?: Array<string>
    }
    aws_rds_cluster: {
      apply_immediately?: boolean
      arn?: string
      availability_zones?: Array<string>
      backtrack_window?: number
      backup_retention_period?: number
      cluster_identifier?: string
      cluster_identifier_prefix?: string
      cluster_members?: Array<string>
      cluster_resource_id?: string
      copy_tags_to_snapshot?: boolean
      database_name?: string
      db_cluster_parameter_group_name?: string
      db_subnet_group_name?: string
      deletion_protection?: boolean
      enable_http_endpoint?: boolean
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_mode?: string
      engine_version?: string
      final_snapshot_identifier?: string
      global_cluster_identifier?: string
      hosted_zone_id?: string
      iam_database_authentication_enabled?: boolean
      iam_roles?: Array<string>
      id?: string
      kms_key_id?: string
      master_password?: string
      master_username?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      reader_endpoint?: string
      replication_source_identifier?: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      source_region?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      s3_import?: {
        bucket_name: string
        bucket_prefix?: string
        ingestion_role: string
        source_engine: string
        source_engine_version: string
      }
      scaling_configuration?: {
        auto_pause?: boolean
        max_capacity?: number
        min_capacity?: number
        seconds_until_auto_pause?: number
        timeout_action?: string
      }
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_load_balancer_policy: {
      id?: string
      load_balancer_name: string
      policy_name: string
      policy_type_name: string
      policy_attribute?: Array<{name?: string; value?: string}>
    }
    aws_ec2_capacity_reservation: {
      availability_zone: string
      ebs_optimized?: boolean
      end_date?: string
      end_date_type?: string
      ephemeral_storage?: boolean
      id?: string
      instance_count: number
      instance_match_criteria?: string
      instance_platform: string
      instance_type: string
      tags?: Record<string, string>
      tenancy?: string
    }
    aws_lambda_alias: {
      arn?: string
      description?: string
      function_name: string
      function_version: string
      id?: string
      invoke_arn?: string
      name: string
      routing_config?: {additional_version_weights?: Record<string, number>}
    }
    aws_network_interface_sg_attachment: {id?: string; network_interface_id: string; security_group_id: string}
    aws_api_gateway_usage_plan_key: {
      id?: string
      key_id: string
      key_type: string
      name?: string
      usage_plan_id: string
      value?: string
    }
    aws_dx_connection: {
      arn?: string
      aws_device?: string
      bandwidth: string
      has_logical_redundancy?: string
      id?: string
      jumbo_frame_capable?: boolean
      location: string
      name: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_dashboard: {dashboard_arn?: string; dashboard_body: string; dashboard_name: string; id?: string}
    aws_msk_cluster: {
      arn?: string
      bootstrap_brokers?: string
      bootstrap_brokers_tls?: string
      cluster_name: string
      current_version?: string
      enhanced_monitoring?: string
      id?: string
      kafka_version: string
      number_of_broker_nodes: number
      tags?: Record<string, string>
      zookeeper_connect_string?: string
      broker_node_group_info: {
        az_distribution?: string
        client_subnets: Array<string>
        ebs_volume_size: number
        instance_type: string
        security_groups: Array<string>
      }
      client_authentication?: {tls?: {certificate_authority_arns?: Array<string>}}
      configuration_info?: {arn: string; revision: number}
      encryption_info?: {
        encryption_at_rest_kms_key_arn?: string
        encryption_in_transit?: {client_broker?: string; in_cluster?: boolean}
      }
      logging_info?: {
        broker_logs: {
          cloudwatch_logs?: {enabled: boolean; log_group?: string}
          firehose?: {delivery_stream?: string; enabled: boolean}
          s3?: {bucket?: string; enabled: boolean; prefix?: string}
        }
      }
      open_monitoring?: {
        prometheus: {jmx_exporter?: {enabled_in_broker: boolean}; node_exporter?: {enabled_in_broker: boolean}}
      }
    }
    aws_service_discovery_service: {
      arn?: string
      description?: string
      id?: string
      name: string
      namespace_id?: string
      dns_config?: {namespace_id: string; routing_policy?: string; dns_records: Array<{ttl: number; type: string}>}
      health_check_config?: {failure_threshold?: number; resource_path?: string; type?: string}
      health_check_custom_config?: {failure_threshold?: number}
    }
    aws_guardduty_member: {
      account_id: string
      detector_id: string
      disable_email_notification?: boolean
      email: string
      id?: string
      invitation_message?: string
      invite?: boolean
      relationship_status?: string
      timeouts?: {create?: string; update?: string}
    }
    aws_iam_group: {arn?: string; id?: string; name: string; path?: string; unique_id?: string}
    aws_emr_cluster: {
      additional_info?: string
      applications?: Array<string>
      arn?: string
      autoscaling_role?: string
      cluster_state?: string
      configurations?: string
      configurations_json?: string
      core_instance_count?: number
      core_instance_type?: string
      custom_ami_id?: string
      ebs_root_volume_size?: number
      id?: string
      keep_job_flow_alive_when_no_steps?: boolean
      log_uri?: string
      master_instance_type?: string
      master_public_dns?: string
      name: string
      release_label: string
      scale_down_behavior?: string
      security_configuration?: string
      service_role: string
      step?: Array<{
        action_on_failure: string
        hadoop_jar_step: Array<{
          args: Array<string>
          jar: string
          main_class: string
          properties: Record<string, string>
        }>
        name: string
      }>
      step_concurrency_level?: number
      tags?: Record<string, string>
      termination_protection?: boolean
      visible_to_all_users?: boolean
      bootstrap_action?: Array<{args?: Array<string>; name: string; path: string}>
      core_instance_group?: {
        autoscaling_policy?: string
        bid_price?: string
        id?: string
        instance_count?: number
        instance_type: string
        name?: string
        ebs_config?: Array<{iops?: number; size: number; type: string; volumes_per_instance?: number}>
      }
      ec2_attributes?: {
        additional_master_security_groups?: string
        additional_slave_security_groups?: string
        emr_managed_master_security_group?: string
        emr_managed_slave_security_group?: string
        instance_profile: string
        key_name?: string
        service_access_security_group?: string
        subnet_id?: string
      }
      instance_group?: Array<{
        autoscaling_policy?: string
        bid_price?: string
        id?: string
        instance_count?: number
        instance_role: string
        instance_type: string
        name?: string
        ebs_config?: Array<{iops?: number; size: number; type: string; volumes_per_instance?: number}>
      }>
      kerberos_attributes?: {
        ad_domain_join_password?: string
        ad_domain_join_user?: string
        cross_realm_trust_principal_password?: string
        kdc_admin_password: string
        realm: string
      }
      master_instance_group?: {
        bid_price?: string
        id?: string
        instance_count?: number
        instance_type: string
        name?: string
        ebs_config?: Array<{iops?: number; size: number; type: string; volumes_per_instance?: number}>
      }
    }
    aws_datasync_location_s3: {
      arn?: string
      id?: string
      s3_bucket_arn: string
      subdirectory: string
      tags?: Record<string, string>
      uri?: string
      s3_config: {bucket_access_role_arn: string}
    }
    aws_ec2_traffic_mirror_session: {
      description?: string
      id?: string
      network_interface_id: string
      packet_length?: number
      session_number: number
      tags?: Record<string, string>
      traffic_mirror_filter_id: string
      traffic_mirror_target_id: string
      virtual_network_id?: number
    }
    aws_dms_event_subscription: {
      arn?: string
      enabled?: boolean
      event_categories: Array<string>
      id?: string
      name: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_apigatewayv2_deployment: {
      api_id: string
      auto_deployed?: boolean
      description?: string
      id?: string
      triggers?: Record<string, string>
    }
    aws_vpc_peering_connection: {
      accept_status?: string
      auto_accept?: boolean
      id?: string
      peer_owner_id?: string
      peer_region?: string
      peer_vpc_id: string
      tags?: Record<string, string>
      vpc_id: string
      accepter?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
      requester?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_opsworks_custom_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name: string
      short_name: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_transfer_ssh_key: {body: string; id?: string; server_id: string; user_name: string}
    aws_wafregional_xss_match_set: {
      id?: string
      name: string
      xss_match_tuple?: Array<{text_transformation: string; field_to_match: {data?: string; type: string}}>
    }
    aws_redshift_subnet_group: {
      arn?: string
      description?: string
      id?: string
      name: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_ebs_volume: {
      arn?: string
      availability_zone: string
      encrypted?: boolean
      id?: string
      iops?: number
      kms_key_id?: string
      multi_attach_enabled?: boolean
      outpost_arn?: string
      size?: number
      snapshot_id?: string
      tags?: Record<string, string>
      type?: string
    }
    aws_api_gateway_method: {
      api_key_required?: boolean
      authorization: string
      authorization_scopes?: Array<string>
      authorizer_id?: string
      http_method: string
      id?: string
      request_models?: Record<string, string>
      request_parameters?: Record<string, boolean>
      request_parameters_in_json?: string
      request_validator_id?: string
      resource_id: string
      rest_api_id: string
    }
    aws_vpn_gateway: {
      amazon_side_asn?: string
      availability_zone?: string
      id?: string
      tags?: Record<string, string>
      vpc_id?: string
    }
    aws_opsworks_java_app_layer: {
      app_server?: string
      app_server_version?: string
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      jvm_options?: string
      jvm_type?: string
      jvm_version?: string
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_s3_access_point: {
      account_id?: string
      arn?: string
      bucket: string
      domain_name?: string
      has_public_access_policy?: boolean
      id?: string
      name: string
      network_origin?: string
      policy?: string
      public_access_block_configuration?: {
        block_public_acls?: boolean
        block_public_policy?: boolean
        ignore_public_acls?: boolean
        restrict_public_buckets?: boolean
      }
      vpc_configuration?: {vpc_id: string}
    }
    aws_api_gateway_rest_api: {
      api_key_source?: string
      arn?: string
      binary_media_types?: Array<string>
      body?: string
      created_date?: string
      description?: string
      execution_arn?: string
      id?: string
      minimum_compression_size?: number
      name: string
      policy?: string
      root_resource_id?: string
      tags?: Record<string, string>
      endpoint_configuration?: {types: Array<string>; vpc_endpoint_ids?: Array<string>}
    }
    aws_waf_byte_match_set: {
      id?: string
      name: string
      byte_match_tuples?: Array<{
        positional_constraint: string
        target_string?: string
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_proxy_protocol_policy: {id?: string; instance_ports: Array<string>; load_balancer: string}
    aws_db_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      parameter?: Array<{apply_method?: string; name: string; value: string}>
    }
    aws_docdb_cluster_snapshot: {
      availability_zones?: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn?: string
      db_cluster_snapshot_identifier: string
      engine?: string
      engine_version?: string
      id?: string
      kms_key_id?: string
      port?: number
      snapshot_type?: string
      source_db_cluster_snapshot_arn?: string
      status?: string
      storage_encrypted?: boolean
      vpc_id?: string
      timeouts?: {create?: string}
    }
    aws_service_discovery_public_dns_namespace: {
      arn?: string
      description?: string
      hosted_zone?: string
      id?: string
      name: string
    }
    aws_elastic_beanstalk_application: {
      arn?: string
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      appversion_lifecycle?: {
        delete_source_from_s3?: boolean
        max_age_in_days?: number
        max_count?: number
        service_role: string
      }
    }
    aws_vpc_peering_connection_accepter: {
      accept_status?: string
      auto_accept?: boolean
      id?: string
      peer_owner_id?: string
      peer_region?: string
      peer_vpc_id?: string
      tags?: Record<string, string>
      vpc_id?: string
      vpc_peering_connection_id: string
      accepter?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
      requester?: {
        allow_classic_link_to_remote_vpc?: boolean
        allow_remote_vpc_dns_resolution?: boolean
        allow_vpc_to_remote_classic_link?: boolean
      }
    }
    aws_directory_service_log_subscription: {directory_id: string; id?: string; log_group_name: string}
    aws_macie_member_account_association: {id?: string; member_account_id: string}
    aws_default_network_acl: {
      default_network_acl_id: string
      id?: string
      owner_id?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      egress?: Array<{
        action: string
        cidr_block?: string
        from_port: number
        icmp_code?: number
        icmp_type?: number
        ipv6_cidr_block?: string
        protocol: string
        rule_no: number
        to_port: number
      }>
      ingress?: Array<{
        action: string
        cidr_block?: string
        from_port: number
        icmp_code?: number
        icmp_type?: number
        ipv6_cidr_block?: string
        protocol: string
        rule_no: number
        to_port: number
      }>
    }
    aws_lambda_function: {
      arn?: string
      description?: string
      filename?: string
      function_name: string
      handler: string
      id?: string
      invoke_arn?: string
      kms_key_arn?: string
      last_modified?: string
      layers?: Array<string>
      memory_size?: number
      publish?: boolean
      qualified_arn?: string
      reserved_concurrent_executions?: number
      role: string
      runtime: string
      s3_bucket?: string
      s3_key?: string
      s3_object_version?: string
      source_code_hash?: string
      source_code_size?: number
      tags?: Record<string, string>
      timeout?: number
      version?: string
      dead_letter_config?: {target_arn: string}
      environment?: {variables?: Record<string, string>}
      timeouts?: {create?: string}
      tracing_config?: {mode: string}
      vpc_config?: {security_group_ids: Array<string>; subnet_ids: Array<string>; vpc_id?: string}
    }
    aws_efs_mount_target: {
      dns_name?: string
      file_system_arn?: string
      file_system_id: string
      id?: string
      ip_address?: string
      network_interface_id?: string
      security_groups?: Array<string>
      subnet_id: string
    }
    aws_api_gateway_stage: {
      arn?: string
      cache_cluster_enabled?: boolean
      cache_cluster_size?: string
      client_certificate_id?: string
      deployment_id: string
      description?: string
      documentation_version?: string
      execution_arn?: string
      id?: string
      invoke_url?: string
      rest_api_id: string
      stage_name: string
      tags?: Record<string, string>
      variables?: Record<string, string>
      xray_tracing_enabled?: boolean
      access_log_settings?: {destination_arn: string; format: string}
    }
    aws_guardduty_organization_configuration: {auto_enable: boolean; detector_id: string; id?: string}
    aws_waf_rule: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      predicates?: Array<{data_id: string; negated: boolean; type: string}>
    }
    aws_lightsail_static_ip: {arn?: string; id?: string; ip_address?: string; name: string; support_code?: string}
    aws_glacier_vault_lock: {
      complete_lock: boolean
      id?: string
      ignore_deletion_error?: boolean
      policy: string
      vault_name: string
    }
    aws_gamelift_build: {
      arn?: string
      id?: string
      name: string
      operating_system: string
      tags?: Record<string, string>
      version?: string
      storage_location: {bucket: string; key: string; role_arn: string}
    }
    aws_dlm_lifecycle_policy: {
      arn?: string
      description: string
      execution_role_arn: string
      id?: string
      state?: string
      tags?: Record<string, string>
      policy_details: {
        resource_types: Array<string>
        target_tags: Record<string, string>
        schedule: Array<{
          copy_tags?: boolean
          name: string
          tags_to_add?: Record<string, string>
          create_rule: {interval: number; interval_unit?: string; times?: Array<string>}
          retain_rule: {count: number}
        }>
      }
    }
    aws_cognito_identity_pool_roles_attachment: {
      id?: string
      identity_pool_id: string
      roles: Record<string, string>
      role_mapping?: Array<{
        ambiguous_role_resolution?: string
        identity_provider: string
        type: string
        mapping_rule?: Array<{claim: string; match_type: string; role_arn: string; value: string}>
      }>
    }
    aws_ssm_resource_data_sync: {
      id?: string
      name: string
      s3_destination: {bucket_name: string; kms_key_arn?: string; prefix?: string; region: string; sync_format?: string}
    }
    aws_cloudhsm_v2_cluster: {
      cluster_certificates?: Array<{
        aws_hardware_certificate: string
        cluster_certificate: string
        cluster_csr: string
        hsm_certificate: string
        manufacturer_hardware_certificate: string
      }>
      cluster_id?: string
      cluster_state?: string
      hsm_type: string
      id?: string
      security_group_id?: string
      source_backup_identifier?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_lightsail_domain: {arn?: string; domain_name: string; id?: string}
    aws_datasync_location_efs: {
      arn?: string
      efs_file_system_arn: string
      id?: string
      subdirectory?: string
      tags?: Record<string, string>
      uri?: string
      ec2_config: {security_group_arns: Array<string>; subnet_arn: string}
    }
    aws_config_aggregate_authorization: {
      account_id: string
      arn?: string
      id?: string
      region: string
      tags?: Record<string, string>
    }
    aws_ssm_activation: {
      activation_code?: string
      description?: string
      expiration_date?: string
      expired?: boolean
      iam_role: string
      id?: string
      name?: string
      registration_count?: number
      registration_limit?: number
      tags?: Record<string, string>
    }
    aws_elasticache_subnet_group: {description?: string; id?: string; name: string; subnet_ids: Array<string>}
    aws_snapshot_create_volume_permission: {account_id: string; id?: string; snapshot_id: string}
    aws_sagemaker_notebook_instance_lifecycle_configuration: {
      arn?: string
      id?: string
      name?: string
      on_create?: string
      on_start?: string
    }
    aws_efs_file_system_policy: {file_system_id: string; id?: string; policy: string}
    aws_ses_event_destination: {
      configuration_set_name: string
      enabled?: boolean
      id?: string
      matching_types: Array<string>
      name: string
      cloudwatch_destination?: Array<{default_value: string; dimension_name: string; value_source: string}>
      kinesis_destination?: {role_arn: string; stream_arn: string}
      sns_destination?: {topic_arn: string}
    }
    aws_egress_only_internet_gateway: {id?: string; tags?: Record<string, string>; vpc_id: string}
    aws_codebuild_source_credential: {
      arn?: string
      auth_type: string
      id?: string
      server_type: string
      token: string
      user_name?: string
    }
    aws_efs_access_point: {
      arn?: string
      file_system_arn?: string
      file_system_id: string
      id?: string
      owner_id?: string
      tags?: Record<string, string>
      posix_user?: {gid: number; secondary_gids?: Array<number>; uid: number}
      root_directory?: {path?: string; creation_info?: {owner_gid: number; owner_uid: number; permissions: string}}
    }
    aws_workspaces_workspace: {
      bundle_id: string
      computer_name?: string
      directory_id: string
      id?: string
      ip_address?: string
      root_volume_encryption_enabled?: boolean
      state?: string
      tags?: Record<string, string>
      user_name: string
      user_volume_encryption_enabled?: boolean
      volume_encryption_key?: string
      workspace_properties?: {
        compute_type_name?: string
        root_volume_size_gib?: number
        running_mode?: string
        running_mode_auto_stop_timeout_in_minutes?: number
        user_volume_size_gib?: number
      }
    }
    aws_vpc: {
      arn?: string
      assign_generated_ipv6_cidr_block?: boolean
      cidr_block: string
      default_network_acl_id?: string
      default_route_table_id?: string
      default_security_group_id?: string
      dhcp_options_id?: string
      enable_classiclink?: boolean
      enable_classiclink_dns_support?: boolean
      enable_dns_hostnames?: boolean
      enable_dns_support?: boolean
      id?: string
      instance_tenancy?: string
      ipv6_association_id?: string
      ipv6_cidr_block?: string
      main_route_table_id?: string
      owner_id?: string
      tags?: Record<string, string>
    }
    aws_datasync_agent: {
      activation_key?: string
      arn?: string
      id?: string
      ip_address?: string
      name?: string
      tags?: Record<string, string>
      timeouts?: {create?: string}
    }
    aws_vpn_connection_route: {destination_cidr_block: string; id?: string; vpn_connection_id: string}
    aws_licensemanager_association: {id?: string; license_configuration_arn: string; resource_arn: string}
    aws_apigatewayv2_integration: {
      api_id: string
      connection_id?: string
      connection_type?: string
      content_handling_strategy?: string
      credentials_arn?: string
      description?: string
      id?: string
      integration_method?: string
      integration_response_selection_expression?: string
      integration_type: string
      integration_uri?: string
      passthrough_behavior?: string
      payload_format_version?: string
      request_templates?: Record<string, string>
      template_selection_expression?: string
      timeout_milliseconds?: number
    }
    aws_ses_receipt_rule_set: {id?: string; rule_set_name: string}
    aws_api_gateway_method_settings: {
      id?: string
      method_path: string
      rest_api_id: string
      stage_name: string
      settings: {
        cache_data_encrypted?: boolean
        cache_ttl_in_seconds?: number
        caching_enabled?: boolean
        data_trace_enabled?: boolean
        logging_level?: string
        metrics_enabled?: boolean
        require_authorization_for_cache_control?: boolean
        throttling_burst_limit?: number
        throttling_rate_limit?: number
        unauthorized_cache_control_header_strategy?: string
      }
    }
    aws_wafv2_regex_pattern_set: {
      arn?: string
      description?: string
      id?: string
      lock_token?: string
      name: string
      scope: string
      tags?: Record<string, string>
      regular_expression?: Array<{regex_string: string}>
    }
    aws_appsync_api_key: {api_id: string; description?: string; expires?: string; id?: string; key?: string}
    aws_iot_thing_type: {
      arn?: string
      deprecated?: boolean
      id?: string
      name: string
      properties?: {description?: string; searchable_attributes?: Array<string>}
    }
    aws_securityhub_product_subscription: {arn?: string; id?: string; product_arn: string}
    aws_s3_account_public_access_block: {
      account_id?: string
      block_public_acls?: boolean
      block_public_policy?: boolean
      id?: string
      ignore_public_acls?: boolean
      restrict_public_buckets?: boolean
    }
    aws_config_configuration_recorder_status: {id?: string; is_enabled: boolean; name: string}
    aws_dx_lag: {
      arn?: string
      connections_bandwidth: string
      force_destroy?: boolean
      has_logical_redundancy?: string
      id?: string
      jumbo_frame_capable?: boolean
      location: string
      name: string
      number_of_connections?: number
      tags?: Record<string, string>
    }
    aws_securityhub_account: {id?: string}
    aws_vpn_gateway_attachment: {id?: string; vpc_id: string; vpn_gateway_id: string}
    aws_guardduty_invite_accepter: {
      detector_id: string
      id?: string
      master_account_id: string
      timeouts?: {create?: string}
    }
    aws_elasticsearch_domain: {
      access_policies?: string
      advanced_options?: Record<string, string>
      arn?: string
      domain_id?: string
      domain_name: string
      elasticsearch_version?: string
      endpoint?: string
      id?: string
      kibana_endpoint?: string
      tags?: Record<string, string>
      cluster_config?: {
        dedicated_master_count?: number
        dedicated_master_enabled?: boolean
        dedicated_master_type?: string
        instance_count?: number
        instance_type?: string
        zone_awareness_enabled?: boolean
        zone_awareness_config?: {availability_zone_count?: number}
      }
      cognito_options?: {enabled?: boolean; identity_pool_id: string; role_arn: string; user_pool_id: string}
      domain_endpoint_options?: {enforce_https: boolean; tls_security_policy?: string}
      ebs_options?: {ebs_enabled: boolean; iops?: number; volume_size?: number; volume_type?: string}
      encrypt_at_rest?: {enabled: boolean; kms_key_id?: string}
      log_publishing_options?: Array<{cloudwatch_log_group_arn: string; enabled?: boolean; log_type: string}>
      node_to_node_encryption?: {enabled: boolean}
      snapshot_options?: {automated_snapshot_start_hour: number}
      timeouts?: {update?: string}
      vpc_options?: {
        availability_zones?: Array<string>
        security_group_ids?: Array<string>
        subnet_ids?: Array<string>
        vpc_id?: string
      }
    }
    aws_dx_private_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      dx_gateway_id?: string
      id?: string
      jumbo_frame_capable?: boolean
      mtu?: number
      name: string
      tags?: Record<string, string>
      vlan: number
      vpn_gateway_id?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_iam_group_policy_attachment: {group: string; id?: string; policy_arn: string}
    aws_s3_bucket_notification: {
      bucket: string
      id?: string
      lambda_function?: Array<{
        events: Array<string>
        filter_prefix?: string
        filter_suffix?: string
        id?: string
        lambda_function_arn?: string
      }>
      queue?: Array<{
        events: Array<string>
        filter_prefix?: string
        filter_suffix?: string
        id?: string
        queue_arn: string
      }>
      topic?: Array<{
        events: Array<string>
        filter_prefix?: string
        filter_suffix?: string
        id?: string
        topic_arn: string
      }>
    }
    aws_iam_user_policy_attachment: {id?: string; policy_arn: string; user: string}
    aws_key_pair: {
      fingerprint?: string
      id?: string
      key_name?: string
      key_name_prefix?: string
      key_pair_id?: string
      public_key: string
      tags?: Record<string, string>
    }
    aws_acm_certificate: {
      arn?: string
      certificate_authority_arn?: string
      certificate_body?: string
      certificate_chain?: string
      domain_name?: string
      domain_validation_options?: Array<{
        domain_name: string
        resource_record_name: string
        resource_record_type: string
        resource_record_value: string
      }>
      id?: string
      private_key?: string
      status?: string
      subject_alternative_names?: Array<string>
      tags?: Record<string, string>
      validation_emails?: Array<string>
      validation_method?: string
      options?: {certificate_transparency_logging_preference?: string}
    }
    aws_db_cluster_snapshot: {
      allocated_storage?: number
      availability_zones?: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn?: string
      db_cluster_snapshot_identifier: string
      engine?: string
      engine_version?: string
      id?: string
      kms_key_id?: string
      license_model?: string
      port?: number
      snapshot_type?: string
      source_db_cluster_snapshot_arn?: string
      status?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {create?: string}
    }
    aws_ebs_encryption_by_default: {enabled?: boolean; id?: string}
    aws_codecommit_trigger: {
      configuration_id?: string
      id?: string
      repository_name: string
      trigger: Array<{
        branches?: Array<string>
        custom_data?: string
        destination_arn: string
        events: Array<string>
        name: string
      }>
    }
    aws_redshift_event_subscription: {
      arn?: string
      customer_aws_id?: string
      enabled?: boolean
      event_categories?: Array<string>
      id?: string
      name: string
      severity?: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      status?: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_sqs_queue_policy: {id?: string; policy: string; queue_url: string}
    aws_config_config_rule: {
      arn?: string
      description?: string
      id?: string
      input_parameters?: string
      maximum_execution_frequency?: string
      name: string
      rule_id?: string
      tags?: Record<string, string>
      scope?: {
        compliance_resource_id?: string
        compliance_resource_types?: Array<string>
        tag_key?: string
        tag_value?: string
      }
      source: {
        owner: string
        source_identifier: string
        source_detail?: Array<{event_source?: string; maximum_execution_frequency?: string; message_type?: string}>
      }
    }
    aws_ses_configuration_set: {id?: string; name: string}
    aws_placement_group: {
      id?: string
      name: string
      placement_group_id?: string
      strategy: string
      tags?: Record<string, string>
    }
    aws_kinesis_firehose_delivery_stream: {
      arn?: string
      destination: string
      destination_id?: string
      id?: string
      name: string
      tags?: Record<string, string>
      version_id?: string
      elasticsearch_configuration?: {
        buffering_interval?: number
        buffering_size?: number
        domain_arn: string
        index_name: string
        index_rotation_period?: string
        retry_duration?: number
        role_arn: string
        s3_backup_mode?: string
        type_name?: string
        cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        processing_configuration?: {
          enabled?: boolean
          processors?: Array<{type: string; parameters?: Array<{parameter_name: string; parameter_value: string}>}>
        }
      }
      extended_s3_configuration?: {
        bucket_arn: string
        buffer_interval?: number
        buffer_size?: number
        compression_format?: string
        error_output_prefix?: string
        kms_key_arn?: string
        prefix?: string
        role_arn: string
        s3_backup_mode?: string
        cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        data_format_conversion_configuration?: {
          enabled?: boolean
          input_format_configuration: {
            deserializer: {
              hive_json_ser_de?: {timestamp_formats?: Array<string>}
              open_x_json_ser_de?: {
                case_insensitive?: boolean
                column_to_json_key_mappings?: Record<string, string>
                convert_dots_in_json_keys_to_underscores?: boolean
              }
            }
          }
          output_format_configuration: {
            serializer: {
              orc_ser_de?: {
                block_size_bytes?: number
                bloom_filter_columns?: Array<string>
                bloom_filter_false_positive_probability?: number
                compression?: string
                dictionary_key_threshold?: number
                enable_padding?: boolean
                format_version?: string
                padding_tolerance?: number
                row_index_stride?: number
                stripe_size_bytes?: number
              }
              parquet_ser_de?: {
                block_size_bytes?: number
                compression?: string
                enable_dictionary_compression?: boolean
                max_padding_bytes?: number
                page_size_bytes?: number
                writer_version?: string
              }
            }
          }
          schema_configuration: {
            catalog_id?: string
            database_name: string
            region?: string
            role_arn: string
            table_name: string
            version_id?: string
          }
        }
        processing_configuration?: {
          enabled?: boolean
          processors?: Array<{type: string; parameters?: Array<{parameter_name: string; parameter_value: string}>}>
        }
        s3_backup_configuration?: {
          bucket_arn: string
          buffer_interval?: number
          buffer_size?: number
          compression_format?: string
          kms_key_arn?: string
          prefix?: string
          role_arn: string
          cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        }
      }
      kinesis_source_configuration?: {kinesis_stream_arn: string; role_arn: string}
      redshift_configuration?: {
        cluster_jdbcurl: string
        copy_options?: string
        data_table_columns?: string
        data_table_name: string
        password: string
        retry_duration?: number
        role_arn: string
        s3_backup_mode?: string
        username: string
        cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        processing_configuration?: {
          enabled?: boolean
          processors?: Array<{type: string; parameters?: Array<{parameter_name: string; parameter_value: string}>}>
        }
        s3_backup_configuration?: {
          bucket_arn: string
          buffer_interval?: number
          buffer_size?: number
          compression_format?: string
          kms_key_arn?: string
          prefix?: string
          role_arn: string
          cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        }
      }
      s3_configuration?: {
        bucket_arn: string
        buffer_interval?: number
        buffer_size?: number
        compression_format?: string
        kms_key_arn?: string
        prefix?: string
        role_arn: string
        cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
      }
      server_side_encryption?: {enabled?: boolean}
      splunk_configuration?: {
        hec_acknowledgment_timeout?: number
        hec_endpoint: string
        hec_endpoint_type?: string
        hec_token: string
        retry_duration?: number
        s3_backup_mode?: string
        cloudwatch_logging_options?: {enabled?: boolean; log_group_name?: string; log_stream_name?: string}
        processing_configuration?: {
          enabled?: boolean
          processors?: Array<{type: string; parameters?: Array<{parameter_name: string; parameter_value: string}>}>
        }
      }
    }
    aws_ecr_repository: {
      arn?: string
      id?: string
      image_tag_mutability?: string
      name: string
      registry_id?: string
      repository_url?: string
      tags?: Record<string, string>
      image_scanning_configuration?: {scan_on_push: boolean}
      timeouts?: {delete?: string}
    }
    aws_iot_thing_principal_attachment: {id?: string; principal: string; thing: string}
    aws_neptune_cluster_instance: {
      address?: string
      apply_immediately?: boolean
      arn?: string
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      cluster_identifier: string
      dbi_resource_id?: string
      endpoint?: string
      engine?: string
      engine_version?: string
      id?: string
      identifier?: string
      identifier_prefix?: string
      instance_class: string
      kms_key_arn?: string
      neptune_parameter_group_name?: string
      neptune_subnet_group_name?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      promotion_tier?: number
      publicly_accessible?: boolean
      storage_encrypted?: boolean
      tags?: Record<string, string>
      writer?: boolean
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_lambda_layer_version: {
      arn?: string
      compatible_runtimes?: Array<string>
      created_date?: string
      description?: string
      filename?: string
      id?: string
      layer_arn?: string
      layer_name: string
      license_info?: string
      s3_bucket?: string
      s3_key?: string
      s3_object_version?: string
      source_code_hash?: string
      source_code_size?: number
      version?: string
    }
    aws_cloudfront_origin_access_identity: {
      caller_reference?: string
      cloudfront_access_identity_path?: string
      comment?: string
      etag?: string
      iam_arn?: string
      id?: string
      s3_canonical_user_id?: string
    }
    aws_api_gateway_domain_name: {
      arn?: string
      certificate_arn?: string
      certificate_body?: string
      certificate_chain?: string
      certificate_name?: string
      certificate_private_key?: string
      certificate_upload_date?: string
      cloudfront_domain_name?: string
      cloudfront_zone_id?: string
      domain_name: string
      id?: string
      regional_certificate_arn?: string
      regional_certificate_name?: string
      regional_domain_name?: string
      regional_zone_id?: string
      security_policy?: string
      tags?: Record<string, string>
      endpoint_configuration?: {types: Array<string>}
    }
    aws_ses_identity_notification_topic: {
      id?: string
      identity: string
      include_original_headers?: boolean
      notification_type: string
      topic_arn?: string
    }
    aws_launch_template: {
      arn?: string
      default_version?: number
      description?: string
      disable_api_termination?: boolean
      ebs_optimized?: string
      id?: string
      image_id?: string
      instance_initiated_shutdown_behavior?: string
      instance_type?: string
      kernel_id?: string
      key_name?: string
      latest_version?: number
      name?: string
      name_prefix?: string
      ram_disk_id?: string
      security_group_names?: Array<string>
      tags?: Record<string, string>
      user_data?: string
      vpc_security_group_ids?: Array<string>
      block_device_mappings?: Array<{
        device_name?: string
        no_device?: string
        virtual_name?: string
        ebs?: {
          delete_on_termination?: string
          encrypted?: string
          iops?: number
          kms_key_id?: string
          snapshot_id?: string
          volume_size?: number
          volume_type?: string
        }
      }>
      capacity_reservation_specification?: {
        capacity_reservation_preference?: string
        capacity_reservation_target?: {capacity_reservation_id?: string}
      }
      cpu_options?: {core_count?: number; threads_per_core?: number}
      credit_specification?: {cpu_credits?: string}
      elastic_gpu_specifications?: Array<{type: string}>
      elastic_inference_accelerator?: {type: string}
      hibernation_options?: {configured: boolean}
      iam_instance_profile?: {arn?: string; name?: string}
      instance_market_options?: {
        market_type?: string
        spot_options?: {
          block_duration_minutes?: number
          instance_interruption_behavior?: string
          max_price?: string
          spot_instance_type?: string
          valid_until?: string
        }
      }
      license_specification?: Array<{license_configuration_arn: string}>
      metadata_options?: {http_endpoint?: string; http_put_response_hop_limit?: number; http_tokens?: string}
      monitoring?: {enabled?: boolean}
      network_interfaces?: Array<{
        associate_public_ip_address?: string
        delete_on_termination?: boolean
        description?: string
        device_index?: number
        ipv4_address_count?: number
        ipv4_addresses?: Array<string>
        ipv6_address_count?: number
        ipv6_addresses?: Array<string>
        network_interface_id?: string
        private_ip_address?: string
        security_groups?: Array<string>
        subnet_id?: string
      }>
      placement?: {
        affinity?: string
        availability_zone?: string
        group_name?: string
        host_id?: string
        partition_number?: number
        spread_domain?: string
        tenancy?: string
      }
      tag_specifications?: Array<{resource_type?: string; tags?: Record<string, string>}>
    }
    aws_fsx_windows_file_system: {
      active_directory_id?: string
      arn?: string
      automatic_backup_retention_days?: number
      copy_tags_to_backups?: boolean
      daily_automatic_backup_start_time?: string
      dns_name?: string
      id?: string
      kms_key_id?: string
      network_interface_ids?: Array<string>
      owner_id?: string
      security_group_ids?: Array<string>
      skip_final_backup?: boolean
      storage_capacity: number
      subnet_ids: Array<string>
      tags?: Record<string, string>
      throughput_capacity: number
      vpc_id?: string
      weekly_maintenance_start_time?: string
      self_managed_active_directory?: {
        dns_ips: Array<string>
        domain_name: string
        file_system_administrators_group?: string
        organizational_unit_distinguished_name?: string
        password: string
        username: string
      }
      timeouts?: {create?: string; delete?: string}
    }
    aws_ram_resource_association: {id?: string; resource_arn: string; resource_share_arn: string}
    aws_pinpoint_app: {
      application_id?: string
      arn?: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      campaign_hook?: {lambda_function_name?: string; mode?: string; web_url?: string}
      limits?: {daily?: number; maximum_duration?: number; messages_per_second?: number; total?: number}
      quiet_time?: {end?: string; start?: string}
    }
    aws_dms_certificate: {
      certificate_arn?: string
      certificate_id: string
      certificate_pem?: string
      certificate_wallet?: string
      id?: string
    }
    aws_elasticache_parameter_group: {
      description?: string
      family: string
      id?: string
      name: string
      parameter?: Array<{name: string; value: string}>
    }
    aws_autoscaling_policy: {
      adjustment_type?: string
      arn?: string
      autoscaling_group_name: string
      cooldown?: number
      estimated_instance_warmup?: number
      id?: string
      metric_aggregation_type?: string
      min_adjustment_magnitude?: number
      min_adjustment_step?: number
      name: string
      policy_type?: string
      scaling_adjustment?: number
      step_adjustment?: Array<{
        metric_interval_lower_bound?: string
        metric_interval_upper_bound?: string
        scaling_adjustment: number
      }>
      target_tracking_configuration?: {
        disable_scale_in?: boolean
        target_value: number
        customized_metric_specification?: {
          metric_name: string
          namespace: string
          statistic: string
          unit?: string
          metric_dimension?: Array<{name: string; value: string}>
        }
        predefined_metric_specification?: {predefined_metric_type: string; resource_label?: string}
      }
    }
    aws_storagegateway_cache: {disk_id: string; gateway_arn: string; id?: string}
    aws_waf_ipset: {arn?: string; id?: string; name: string; ip_set_descriptors?: Array<{type: string; value: string}>}
    aws_ram_principal_association: {id?: string; principal: string; resource_share_arn: string}
    aws_appmesh_virtual_service: {
      arn?: string
      created_date?: string
      id?: string
      last_updated_date?: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
      spec: {provider?: {virtual_node?: {virtual_node_name: string}; virtual_router?: {virtual_router_name: string}}}
    }
    aws_dx_hosted_transit_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      id?: string
      jumbo_frame_capable?: boolean
      mtu?: number
      name: string
      owner_account_id: string
      vlan: number
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_redshift_cluster: {
      allow_version_upgrade?: boolean
      arn?: string
      automated_snapshot_retention_period?: number
      availability_zone?: string
      bucket_name?: string
      cluster_identifier: string
      cluster_parameter_group_name?: string
      cluster_public_key?: string
      cluster_revision_number?: string
      cluster_security_groups?: Array<string>
      cluster_subnet_group_name?: string
      cluster_type?: string
      cluster_version?: string
      database_name?: string
      dns_name?: string
      elastic_ip?: string
      enable_logging?: boolean
      encrypted?: boolean
      endpoint?: string
      enhanced_vpc_routing?: boolean
      final_snapshot_identifier?: string
      iam_roles?: Array<string>
      id?: string
      kms_key_id?: string
      master_password?: string
      master_username?: string
      node_type: string
      number_of_nodes?: number
      owner_account?: string
      port?: number
      preferred_maintenance_window?: string
      publicly_accessible?: boolean
      s3_key_prefix?: string
      skip_final_snapshot?: boolean
      snapshot_cluster_identifier?: string
      snapshot_identifier?: string
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      logging?: {bucket_name?: string; enable: boolean; s3_key_prefix?: string}
      snapshot_copy?: {destination_region: string; grant_name?: string; retention_period?: number}
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_redshift_security_group: {
      description?: string
      id?: string
      name: string
      ingress: Array<{cidr?: string; security_group_name?: string; security_group_owner_id?: string}>
    }
    aws_redshift_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name: string
      tags?: Record<string, string>
      parameter?: Array<{name: string; value: string}>
    }
    aws_elb_attachment: {elb: string; id?: string; instance: string}
    aws_api_gateway_client_certificate: {
      arn?: string
      created_date?: string
      description?: string
      expiration_date?: string
      id?: string
      pem_encoded_certificate?: string
      tags?: Record<string, string>
    }
    aws_msk_configuration: {
      arn?: string
      description?: string
      id?: string
      kafka_versions: Array<string>
      latest_revision?: number
      name: string
      server_properties: string
    }
    aws_ec2_traffic_mirror_target: {
      description?: string
      id?: string
      network_interface_id?: string
      network_load_balancer_arn?: string
      tags?: Record<string, string>
    }
    aws_dms_replication_task: {
      cdc_start_time?: string
      id?: string
      migration_type: string
      replication_instance_arn: string
      replication_task_arn?: string
      replication_task_id: string
      replication_task_settings?: string
      source_endpoint_arn: string
      table_mappings: string
      tags?: Record<string, string>
      target_endpoint_arn: string
    }
    aws_alb: {
      arn?: string
      arn_suffix?: string
      dns_name?: string
      drop_invalid_header_fields?: boolean
      enable_cross_zone_load_balancing?: boolean
      enable_deletion_protection?: boolean
      enable_http2?: boolean
      id?: string
      idle_timeout?: number
      internal?: boolean
      ip_address_type?: string
      load_balancer_type?: string
      name?: string
      name_prefix?: string
      security_groups?: Array<string>
      subnets?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      zone_id?: string
      access_logs?: {bucket: string; enabled?: boolean; prefix?: string}
      subnet_mapping?: Array<{allocation_id?: string; subnet_id: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_dynamodb_table: {
      arn?: string
      billing_mode?: string
      hash_key: string
      id?: string
      name: string
      range_key?: string
      read_capacity?: number
      stream_arn?: string
      stream_enabled?: boolean
      stream_label?: string
      stream_view_type?: string
      tags?: Record<string, string>
      write_capacity?: number
      attribute: Array<{name: string; type: string}>
      global_secondary_index?: Array<{
        hash_key: string
        name: string
        non_key_attributes?: Array<string>
        projection_type: string
        range_key?: string
        read_capacity?: number
        write_capacity?: number
      }>
      local_secondary_index?: Array<{
        name: string
        non_key_attributes?: Array<string>
        projection_type: string
        range_key: string
      }>
      point_in_time_recovery?: {enabled: boolean}
      replica?: Array<{region_name: string}>
      server_side_encryption?: {enabled: boolean; kms_key_arn?: string}
      timeouts?: {create?: string; delete?: string; update?: string}
      ttl?: {attribute_name: string; enabled?: boolean}
    }
    aws_neptune_cluster_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      parameter?: Array<{apply_method?: string; name: string; value: string}>
    }
    aws_glue_crawler: {
      arn?: string
      classifiers?: Array<string>
      configuration?: string
      database_name: string
      description?: string
      id?: string
      name: string
      role: string
      schedule?: string
      security_configuration?: string
      table_prefix?: string
      tags?: Record<string, string>
      catalog_target?: Array<{database_name: string; tables: Array<string>}>
      dynamodb_target?: Array<{path: string}>
      jdbc_target?: Array<{connection_name: string; exclusions?: Array<string>; path: string}>
      s3_target?: Array<{exclusions?: Array<string>; path: string}>
      schema_change_policy?: {delete_behavior?: string; update_behavior?: string}
    }
    aws_organizations_policy_attachment: {id?: string; policy_id: string; target_id: string}
    aws_ssm_document: {
      arn?: string
      content: string
      created_date?: string
      default_version?: string
      description?: string
      document_format?: string
      document_type: string
      document_version?: string
      hash?: string
      hash_type?: string
      id?: string
      latest_version?: string
      name: string
      owner?: string
      parameter?: Array<{default_value: string; description: string; name: string; type: string}>
      permissions?: Record<string, string>
      platform_types?: Array<string>
      schema_version?: string
      status?: string
      tags?: Record<string, string>
      target_type?: string
      attachments_source?: Array<{key: string; name?: string; values: Array<string>}>
    }
    aws_iam_instance_profile: {
      arn?: string
      create_date?: string
      id?: string
      name?: string
      name_prefix?: string
      path?: string
      role?: string
      roles?: Array<string>
      unique_id?: string
    }
    aws_pinpoint_event_stream: {application_id: string; destination_stream_arn: string; id?: string; role_arn: string}
    aws_vpc_endpoint_subnet_association: {
      id?: string
      subnet_id: string
      vpc_endpoint_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_main_route_table_association: {
      id?: string
      original_route_table_id?: string
      route_table_id: string
      vpc_id: string
    }
    aws_qldb_ledger: {
      arn?: string
      deletion_protection?: boolean
      id?: string
      name?: string
      tags?: Record<string, string>
    }
    aws_directory_service_directory: {
      access_url?: string
      alias?: string
      description?: string
      dns_ip_addresses?: Array<string>
      edition?: string
      enable_sso?: boolean
      id?: string
      name: string
      password: string
      security_group_id?: string
      short_name?: string
      size?: string
      tags?: Record<string, string>
      type?: string
      connect_settings?: {
        availability_zones?: Array<string>
        connect_ips?: Array<string>
        customer_dns_ips: Array<string>
        customer_username: string
        subnet_ids: Array<string>
        vpc_id: string
      }
      vpc_settings?: {availability_zones?: Array<string>; subnet_ids: Array<string>; vpc_id: string}
    }
    aws_docdb_subnet_group: {
      arn?: string
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_s3_bucket_inventory: {
      bucket: string
      enabled?: boolean
      id?: string
      included_object_versions: string
      name: string
      optional_fields?: Array<string>
      destination: {
        bucket: {
          account_id?: string
          bucket_arn: string
          format: string
          prefix?: string
          encryption?: {sse_kms?: {key_id: string}; sse_s3?: {}}
        }
      }
      filter?: {prefix?: string}
      schedule: {frequency: string}
    }
    aws_vpc_endpoint_connection_notification: {
      connection_events: Array<string>
      connection_notification_arn: string
      id?: string
      notification_type?: string
      state?: string
      vpc_endpoint_id?: string
      vpc_endpoint_service_id?: string
    }
    aws_fms_admin_account: {account_id?: string; id?: string}
    aws_transfer_user: {
      arn?: string
      home_directory?: string
      id?: string
      policy?: string
      role: string
      server_id: string
      tags?: Record<string, string>
      user_name: string
    }
    aws_db_option_group: {
      arn?: string
      engine_name: string
      id?: string
      major_engine_version: string
      name?: string
      name_prefix?: string
      option_group_description?: string
      tags?: Record<string, string>
      option?: Array<{
        db_security_group_memberships?: Array<string>
        option_name: string
        port?: number
        version?: string
        vpc_security_group_memberships?: Array<string>
        option_settings?: Array<{name: string; value: string}>
      }>
      timeouts?: {delete?: string}
    }
    aws_alb_listener_certificate: {certificate_arn: string; id?: string; listener_arn: string}
    aws_lb_listener: {
      arn?: string
      certificate_arn?: string
      id?: string
      load_balancer_arn: string
      port: number
      protocol?: string
      ssl_policy?: string
      default_action: Array<{
        order?: number
        target_group_arn?: string
        type: string
        authenticate_cognito?: {
          authentication_request_extra_params?: Record<string, string>
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }
        authenticate_oidc?: {
          authentication_request_extra_params?: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          token_endpoint: string
          user_info_endpoint: string
        }
        fixed_response?: {content_type: string; message_body?: string; status_code?: string}
        forward?: {
          stickiness?: {duration: number; enabled?: boolean}
          target_group: Array<{arn: string; weight?: number}>
        }
        redirect?: {host?: string; path?: string; port?: string; protocol?: string; query?: string; status_code: string}
      }>
      timeouts?: {read?: string}
    }
    aws_codebuild_project: {
      arn?: string
      badge_enabled?: boolean
      badge_url?: string
      build_timeout?: number
      description?: string
      encryption_key?: string
      id?: string
      name: string
      queued_timeout?: number
      service_role: string
      source_version?: string
      tags?: Record<string, string>
      artifacts: {
        artifact_identifier?: string
        encryption_disabled?: boolean
        location?: string
        name?: string
        namespace_type?: string
        override_artifact_name?: boolean
        packaging?: string
        path?: string
        type: string
      }
      cache?: {location?: string; modes?: Array<string>; type?: string}
      environment: {
        certificate?: string
        compute_type: string
        image: string
        image_pull_credentials_type?: string
        privileged_mode?: boolean
        type: string
        environment_variable?: Array<{name: string; type?: string; value: string}>
        registry_credential?: {credential: string; credential_provider: string}
      }
      logs_config?: {
        cloudwatch_logs?: {group_name?: string; status?: string; stream_name?: string}
        s3_logs?: {encryption_disabled?: boolean; location?: string; status?: string}
      }
      secondary_artifacts?: Array<{
        artifact_identifier: string
        encryption_disabled?: boolean
        location?: string
        name?: string
        namespace_type?: string
        override_artifact_name?: boolean
        packaging?: string
        path?: string
        type: string
      }>
      secondary_sources?: Array<{
        buildspec?: string
        git_clone_depth?: number
        insecure_ssl?: boolean
        location?: string
        report_build_status?: boolean
        source_identifier: string
        type: string
        auth?: {resource?: string; type: string}
        git_submodules_config?: {fetch_submodules: boolean}
      }>
      source: {
        buildspec?: string
        git_clone_depth?: number
        insecure_ssl?: boolean
        location?: string
        report_build_status?: boolean
        type: string
        auth?: {resource?: string; type: string}
        git_submodules_config?: {fetch_submodules: boolean}
      }
      vpc_config?: {security_group_ids: Array<string>; subnets: Array<string>; vpc_id: string}
    }
    aws_iot_topic_rule: {
      arn?: string
      description?: string
      enabled: boolean
      id?: string
      name: string
      sql: string
      sql_version: string
      tags?: Record<string, string>
      cloudwatch_alarm?: Array<{alarm_name: string; role_arn: string; state_reason: string; state_value: string}>
      cloudwatch_metric?: Array<{
        metric_name: string
        metric_namespace: string
        metric_timestamp?: string
        metric_unit: string
        metric_value: string
        role_arn: string
      }>
      dynamodb?: Array<{
        hash_key_field: string
        hash_key_type?: string
        hash_key_value: string
        operation?: string
        payload_field?: string
        range_key_field?: string
        range_key_type?: string
        range_key_value?: string
        role_arn: string
        table_name: string
      }>
      dynamodbv2?: Array<{role_arn: string; put_item?: {table_name: string}}>
      elasticsearch?: Array<{endpoint: string; id: string; index: string; role_arn: string; type: string}>
      firehose?: Array<{delivery_stream_name: string; role_arn: string; separator?: string}>
      iot_analytics?: Array<{channel_name: string; role_arn: string}>
      iot_events?: Array<{input_name: string; message_id?: string; role_arn: string}>
      kinesis?: Array<{partition_key?: string; role_arn: string; stream_name: string}>
      lambda?: Array<{function_arn: string}>
      republish?: Array<{qos?: number; role_arn: string; topic: string}>
      s3?: Array<{bucket_name: string; key: string; role_arn: string}>
      sns?: Array<{message_format?: string; role_arn: string; target_arn: string}>
      sqs?: Array<{queue_url: string; role_arn: string; use_base64: boolean}>
      step_functions?: Array<{execution_name_prefix?: string; role_arn: string; state_machine_name: string}>
    }
    aws_s3_bucket_object: {
      acl?: string
      bucket: string
      cache_control?: string
      content?: string
      content_base64?: string
      content_disposition?: string
      content_encoding?: string
      content_language?: string
      content_type?: string
      etag?: string
      force_destroy?: boolean
      id?: string
      key: string
      kms_key_id?: string
      metadata?: Record<string, string>
      object_lock_legal_hold_status?: string
      object_lock_mode?: string
      object_lock_retain_until_date?: string
      server_side_encryption?: string
      source?: string
      storage_class?: string
      tags?: Record<string, string>
      version_id?: string
      website_redirect?: string
    }
    aws_ecs_capacity_provider: {
      arn?: string
      id?: string
      name: string
      tags?: Record<string, string>
      auto_scaling_group_provider: {
        auto_scaling_group_arn: string
        managed_termination_protection?: string
        managed_scaling?: {
          maximum_scaling_step_size?: number
          minimum_scaling_step_size?: number
          status?: string
          target_capacity?: number
        }
      }
    }
    aws_kms_ciphertext: {
      ciphertext_blob?: string
      context?: Record<string, string>
      id?: string
      key_id: string
      plaintext: string
    }
    aws_pinpoint_gcm_channel: {api_key: string; application_id: string; enabled?: boolean; id?: string}
    aws_globalaccelerator_endpoint_group: {
      endpoint_group_region?: string
      health_check_interval_seconds?: number
      health_check_path?: string
      health_check_port?: number
      health_check_protocol?: string
      id?: string
      listener_arn: string
      threshold_count?: number
      traffic_dial_percentage?: number
      endpoint_configuration?: Array<{endpoint_id?: string; weight?: number}>
    }
    aws_opsworks_rds_db_instance: {
      db_password: string
      db_user: string
      id?: string
      rds_db_instance_arn: string
      stack_id: string
    }
    aws_ec2_transit_gateway_route_table_association: {
      id?: string
      resource_id?: string
      resource_type?: string
      transit_gateway_attachment_id: string
      transit_gateway_route_table_id: string
    }
    aws_redshift_snapshot_schedule_association: {cluster_identifier: string; id?: string; schedule_identifier: string}
    aws_iot_certificate: {
      active: boolean
      arn?: string
      certificate_pem?: string
      csr?: string
      id?: string
      private_key?: string
      public_key?: string
    }
    aws_kms_external_key: {
      arn?: string
      deletion_window_in_days?: number
      description?: string
      enabled?: boolean
      expiration_model?: string
      id?: string
      key_material_base64?: string
      key_state?: string
      key_usage?: string
      policy?: string
      tags?: Record<string, string>
      valid_to?: string
    }
    aws_route53_health_check: {
      child_health_threshold?: number
      child_healthchecks?: Array<string>
      cloudwatch_alarm_name?: string
      cloudwatch_alarm_region?: string
      enable_sni?: boolean
      failure_threshold?: number
      fqdn?: string
      id?: string
      insufficient_data_health_status?: string
      invert_healthcheck?: boolean
      ip_address?: string
      measure_latency?: boolean
      port?: number
      reference_name?: string
      regions?: Array<string>
      request_interval?: number
      resource_path?: string
      search_string?: string
      tags?: Record<string, string>
      type: string
    }
    aws_apigatewayv2_domain_name: {
      api_mapping_selection_expression?: string
      arn?: string
      domain_name: string
      id?: string
      tags?: Record<string, string>
      domain_name_configuration: {
        certificate_arn: string
        endpoint_type: string
        hosted_zone_id?: string
        security_policy: string
        target_domain_name?: string
      }
      timeouts?: {update?: string}
    }
    aws_cloudwatch_event_target: {
      arn: string
      id?: string
      input?: string
      input_path?: string
      role_arn?: string
      rule: string
      target_id?: string
      batch_target?: {array_size?: number; job_attempts?: number; job_definition: string; job_name: string}
      ecs_target?: {
        group?: string
        launch_type?: string
        platform_version?: string
        task_count?: number
        task_definition_arn: string
        network_configuration?: {assign_public_ip?: boolean; security_groups?: Array<string>; subnets: Array<string>}
      }
      input_transformer?: {input_paths?: Record<string, string>; input_template: string}
      kinesis_target?: {partition_key_path?: string}
      run_command_targets?: Array<{key: string; values: Array<string>}>
      sqs_target?: {message_group_id?: string}
    }
    aws_cloudhsm_v2_hsm: {
      availability_zone?: string
      cluster_id: string
      hsm_eni_id?: string
      hsm_id?: string
      hsm_state?: string
      id?: string
      ip_address?: string
      subnet_id?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_elastictranscoder_preset: {
      arn?: string
      container: string
      description?: string
      id?: string
      name?: string
      type?: string
      video_codec_options?: Record<string, string>
      audio?: {audio_packing_mode?: string; bit_rate?: string; channels?: string; codec?: string; sample_rate?: string}
      audio_codec_options?: {bit_depth?: string; bit_order?: string; profile?: string; signed?: string}
      thumbnails?: {
        aspect_ratio?: string
        format?: string
        interval?: string
        max_height?: string
        max_width?: string
        padding_policy?: string
        resolution?: string
        sizing_policy?: string
      }
      video?: {
        aspect_ratio?: string
        bit_rate?: string
        codec?: string
        display_aspect_ratio?: string
        fixed_gop?: string
        frame_rate?: string
        keyframes_max_dist?: string
        max_frame_rate?: string
        max_height?: string
        max_width?: string
        padding_policy?: string
        resolution?: string
        sizing_policy?: string
      }
      video_watermarks?: Array<{
        horizontal_align?: string
        horizontal_offset?: string
        id?: string
        max_height?: string
        max_width?: string
        opacity?: string
        sizing_policy?: string
        target?: string
        vertical_align?: string
        vertical_offset?: string
      }>
    }
    aws_dms_replication_subnet_group: {
      id?: string
      replication_subnet_group_arn?: string
      replication_subnet_group_description: string
      replication_subnet_group_id: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
    }
    aws_emr_instance_group: {
      autoscaling_policy?: string
      bid_price?: string
      cluster_id: string
      configurations_json?: string
      ebs_optimized?: boolean
      id?: string
      instance_count?: number
      instance_type: string
      name?: string
      running_instance_count?: number
      status?: string
      ebs_config?: Array<{iops?: number; size: number; type: string; volumes_per_instance?: number}>
    }
    aws_rds_cluster_endpoint: {
      arn?: string
      cluster_endpoint_identifier: string
      cluster_identifier: string
      custom_endpoint_type: string
      endpoint?: string
      excluded_members?: Array<string>
      id?: string
      static_members?: Array<string>
      tags?: Record<string, string>
    }
    aws_security_group_rule: {
      cidr_blocks?: Array<string>
      description?: string
      from_port: number
      id?: string
      ipv6_cidr_blocks?: Array<string>
      prefix_list_ids?: Array<string>
      protocol: string
      security_group_id: string
      self?: boolean
      source_security_group_id?: string
      to_port: number
      type: string
    }
    aws_xray_sampling_rule: {
      arn?: string
      attributes?: Record<string, string>
      fixed_rate: number
      host: string
      http_method: string
      id?: string
      priority: number
      reservoir_size: number
      resource_arn: string
      rule_name?: string
      service_name: string
      service_type: string
      url_path: string
      version: number
    }
    aws_config_organization_managed_rule: {
      arn?: string
      description?: string
      excluded_accounts?: Array<string>
      id?: string
      input_parameters?: string
      maximum_execution_frequency?: string
      name: string
      resource_id_scope?: string
      resource_types_scope?: Array<string>
      rule_identifier: string
      tag_key_scope?: string
      tag_value_scope?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_wafregional_web_acl_association: {id?: string; resource_arn: string; web_acl_id: string}
    aws_ecs_task_definition: {
      arn?: string
      container_definitions: string
      cpu?: string
      execution_role_arn?: string
      family: string
      id?: string
      ipc_mode?: string
      memory?: string
      network_mode?: string
      pid_mode?: string
      requires_compatibilities?: Array<string>
      revision?: number
      tags?: Record<string, string>
      task_role_arn?: string
      inference_accelerator?: Array<{device_name: string; device_type: string}>
      placement_constraints?: Array<{expression?: string; type: string}>
      proxy_configuration?: {container_name: string; properties?: Record<string, string>; type?: string}
      volume?: Array<{
        host_path?: string
        name: string
        docker_volume_configuration?: {
          autoprovision?: boolean
          driver?: string
          driver_opts?: Record<string, string>
          labels?: Record<string, string>
          scope?: string
        }
        efs_volume_configuration?: {file_system_id: string; root_directory?: string}
      }>
    }
    aws_ecr_lifecycle_policy: {id?: string; policy: string; registry_id?: string; repository: string}
    aws_docdb_cluster_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      parameter?: Array<{apply_method?: string; name: string; value: string}>
    }
    aws_kinesis_analytics_application: {
      arn?: string
      code?: string
      create_timestamp?: string
      description?: string
      id?: string
      last_update_timestamp?: string
      name: string
      status?: string
      tags?: Record<string, string>
      version?: number
      cloudwatch_logging_options?: {id?: string; log_stream_arn: string; role_arn: string}
      inputs?: {
        id?: string
        name_prefix: string
        starting_position_configuration?: Array<{starting_position: string}>
        stream_names?: Array<string>
        kinesis_firehose?: {resource_arn: string; role_arn: string}
        kinesis_stream?: {resource_arn: string; role_arn: string}
        parallelism?: {count: number}
        processing_configuration?: {lambda: {resource_arn: string; role_arn: string}}
        schema: {
          record_encoding?: string
          record_columns: Array<{mapping?: string; name: string; sql_type: string}>
          record_format: {
            record_format_type?: string
            mapping_parameters?: {
              csv?: {record_column_delimiter: string; record_row_delimiter: string}
              json?: {record_row_path: string}
            }
          }
        }
      }
      outputs?: Array<{
        id?: string
        name: string
        kinesis_firehose?: {resource_arn: string; role_arn: string}
        kinesis_stream?: {resource_arn: string; role_arn: string}
        lambda?: {resource_arn: string; role_arn: string}
        schema: {record_format_type?: string}
      }>
      reference_data_sources?: {
        id?: string
        table_name: string
        s3: {bucket_arn: string; file_key: string; role_arn: string}
        schema: {
          record_encoding?: string
          record_columns: Array<{mapping?: string; name: string; sql_type: string}>
          record_format: {
            record_format_type?: string
            mapping_parameters?: {
              csv?: {record_column_delimiter: string; record_row_delimiter: string}
              json?: {record_row_path: string}
            }
          }
        }
      }
    }
    aws_ami: {
      architecture?: string
      description?: string
      ena_support?: boolean
      id?: string
      image_location?: string
      kernel_id?: string
      manage_ebs_snapshots?: boolean
      name: string
      ramdisk_id?: string
      root_device_name?: string
      root_snapshot_id?: string
      sriov_net_support?: string
      tags?: Record<string, string>
      virtualization_type?: string
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name: string
        encrypted?: boolean
        iops?: number
        snapshot_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name: string; virtual_name: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_opsworks_rails_app_layer: {
      app_server?: string
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      bundler_version?: string
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      manage_bundler?: boolean
      name?: string
      passenger_version?: string
      ruby_version?: string
      rubygems_version?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_media_convert_queue: {
      arn?: string
      description?: string
      id?: string
      name: string
      pricing_plan?: string
      status?: string
      tags?: Record<string, string>
      reservation_plan_settings?: {commitment: string; renewal_type: string; reserved_slots: number}
    }
    aws_worklink_fleet: {
      arn?: string
      audit_stream_arn?: string
      company_code?: string
      created_time?: string
      device_ca_certificate?: string
      display_name?: string
      id?: string
      last_updated_time?: string
      name: string
      optimize_for_end_user_location?: boolean
      identity_provider?: {saml_metadata: string; type: string}
      network?: {security_group_ids: Array<string>; subnet_ids: Array<string>; vpc_id: string}
    }
    aws_gamelift_fleet: {
      arn?: string
      build_id: string
      description?: string
      ec2_instance_type: string
      fleet_type?: string
      id?: string
      instance_role_arn?: string
      log_paths?: Array<string>
      metric_groups?: Array<string>
      name: string
      new_game_session_protection_policy?: string
      operating_system?: string
      tags?: Record<string, string>
      ec2_inbound_permission?: Array<{from_port: number; ip_range: string; protocol: string; to_port: number}>
      resource_creation_limit_policy?: {new_game_sessions_per_creator?: number; policy_period_in_minutes?: number}
      runtime_configuration?: {
        game_session_activation_timeout_seconds?: number
        max_concurrent_game_session_activations?: number
        server_process?: Array<{concurrent_executions: number; launch_path: string; parameters?: string}>
      }
      timeouts?: {create?: string; delete?: string}
    }
    aws_backup_plan: {
      arn?: string
      id?: string
      name: string
      tags?: Record<string, string>
      version?: string
      rule: Array<{
        completion_window?: number
        recovery_point_tags?: Record<string, string>
        rule_name: string
        schedule?: string
        start_window?: number
        target_vault_name: string
        copy_action?: Array<{
          destination_vault_arn: string
          lifecycle?: {cold_storage_after?: number; delete_after?: number}
        }>
        lifecycle?: {cold_storage_after?: number; delete_after?: number}
      }>
    }
    aws_apigatewayv2_api: {
      api_endpoint?: string
      api_key_selection_expression?: string
      arn?: string
      credentials_arn?: string
      description?: string
      execution_arn?: string
      id?: string
      name: string
      protocol_type: string
      route_key?: string
      route_selection_expression?: string
      tags?: Record<string, string>
      target?: string
      version?: string
      cors_configuration?: {
        allow_credentials?: boolean
        allow_headers?: Array<string>
        allow_methods?: Array<string>
        allow_origins?: Array<string>
        expose_headers?: Array<string>
        max_age?: number
      }
    }
    aws_lambda_provisioned_concurrency_config: {
      function_name: string
      id?: string
      provisioned_concurrent_executions: number
      qualifier: string
      timeouts?: {create?: string; update?: string}
    }
    aws_dx_bgp_peer: {
      address_family: string
      amazon_address?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      bgp_peer_id?: string
      bgp_status?: string
      customer_address?: string
      id?: string
      virtual_interface_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_ecs_cluster: {
      arn?: string
      capacity_providers?: Array<string>
      id?: string
      name: string
      tags?: Record<string, string>
      default_capacity_provider_strategy?: Array<{base?: number; capacity_provider: string; weight?: number}>
      setting?: Array<{name: string; value: string}>
    }
    aws_budgets_budget: {
      account_id?: string
      budget_type: string
      cost_filters?: Record<string, string>
      id?: string
      limit_amount: string
      limit_unit: string
      name?: string
      name_prefix?: string
      time_period_end?: string
      time_period_start: string
      time_unit: string
      cost_types?: {
        include_credit?: boolean
        include_discount?: boolean
        include_other_subscription?: boolean
        include_recurring?: boolean
        include_refund?: boolean
        include_subscription?: boolean
        include_support?: boolean
        include_tax?: boolean
        include_upfront?: boolean
        use_amortized?: boolean
        use_blended?: boolean
      }
      notification?: Array<{
        comparison_operator: string
        notification_type: string
        subscriber_email_addresses?: Array<string>
        subscriber_sns_topic_arns?: Array<string>
        threshold: number
        threshold_type: string
      }>
    }
    aws_securityhub_member: {
      account_id: string
      email: string
      id?: string
      invite?: boolean
      master_id?: string
      member_status?: string
    }
    aws_media_package_channel: {
      arn?: string
      channel_id: string
      description?: string
      hls_ingest?: Array<{ingest_endpoints: Array<{password: string; url: string; username: string}>}>
      id?: string
      tags?: Record<string, string>
    }
    aws_wafregional_ipset: {
      arn?: string
      id?: string
      name: string
      ip_set_descriptor?: Array<{type: string; value: string}>
    }
    aws_elasticsearch_domain_policy: {access_policies: string; domain_name: string; id?: string}
    aws_pinpoint_apns_voip_sandbox_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id?: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_api_gateway_vpc_link: {
      arn?: string
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      target_arns: Array<string>
    }
    aws_cloudwatch_log_resource_policy: {id?: string; policy_document: string; policy_name: string}
    aws_lightsail_instance: {
      arn?: string
      availability_zone: string
      blueprint_id: string
      bundle_id: string
      cpu_count?: number
      created_at?: string
      id?: string
      ipv6_address?: string
      is_static_ip?: boolean
      key_pair_name?: string
      name: string
      private_ip_address?: string
      public_ip_address?: string
      ram_size?: number
      tags?: Record<string, string>
      user_data?: string
      username?: string
    }
    aws_glue_workflow: {
      default_run_properties?: Record<string, string>
      description?: string
      id?: string
      name?: string
    }
    aws_iam_group_membership: {group: string; id?: string; name: string; users: Array<string>}
    aws_dms_replication_instance: {
      allocated_storage?: number
      apply_immediately?: boolean
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      engine_version?: string
      id?: string
      kms_key_arn?: string
      multi_az?: boolean
      preferred_maintenance_window?: string
      publicly_accessible?: boolean
      replication_instance_arn?: string
      replication_instance_class: string
      replication_instance_id: string
      replication_instance_private_ips?: Array<string>
      replication_instance_public_ips?: Array<string>
      replication_subnet_group_id?: string
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_batch_compute_environment: {
      arn?: string
      compute_environment_name?: string
      compute_environment_name_prefix?: string
      ecc_cluster_arn?: string
      ecs_cluster_arn?: string
      id?: string
      service_role: string
      state?: string
      status?: string
      status_reason?: string
      type: string
      compute_resources?: {
        allocation_strategy?: string
        bid_percentage?: number
        desired_vcpus?: number
        ec2_key_pair?: string
        image_id?: string
        instance_role: string
        instance_type: Array<string>
        max_vcpus: number
        min_vcpus: number
        security_group_ids: Array<string>
        spot_iam_fleet_role?: string
        subnets: Array<string>
        tags?: Record<string, string>
        type: string
        launch_template?: {launch_template_id?: string; launch_template_name?: string; version?: string}
      }
    }
    aws_ec2_transit_gateway_vpc_attachment: {
      dns_support?: string
      id?: string
      ipv6_support?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      transit_gateway_default_route_table_association?: boolean
      transit_gateway_default_route_table_propagation?: boolean
      transit_gateway_id: string
      vpc_id: string
      vpc_owner_id?: string
    }
    aws_route53_resolver_rule_association: {
      id?: string
      name?: string
      resolver_rule_id: string
      vpc_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_ec2_availability_zone_group: {group_name: string; id?: string; opt_in_status: string}
    aws_elastic_beanstalk_configuration_template: {
      application: string
      description?: string
      environment_id?: string
      id?: string
      name: string
      solution_stack_name?: string
      setting?: Array<{name: string; namespace: string; resource?: string; value: string}>
    }
    aws_guardduty_threatintelset: {
      activate: boolean
      detector_id: string
      format: string
      id?: string
      location: string
      name: string
    }
    aws_directory_service_conditional_forwarder: {
      directory_id: string
      dns_ips: Array<string>
      id?: string
      remote_domain_name: string
    }
    aws_ssm_maintenance_window: {
      allow_unassociated_targets?: boolean
      cutoff: number
      description?: string
      duration: number
      enabled?: boolean
      end_date?: string
      id?: string
      name: string
      schedule: string
      schedule_timezone?: string
      start_date?: string
      tags?: Record<string, string>
    }
    aws_dax_cluster: {
      arn?: string
      availability_zones?: Array<string>
      cluster_address?: string
      cluster_name: string
      configuration_endpoint?: string
      description?: string
      iam_role_arn: string
      id?: string
      maintenance_window?: string
      node_type: string
      nodes?: Array<{address: string; availability_zone: string; id: string; port: number}>
      notification_topic_arn?: string
      parameter_group_name?: string
      port?: number
      replication_factor: number
      security_group_ids?: Array<string>
      subnet_group_name?: string
      tags?: Record<string, string>
      server_side_encryption?: {enabled?: boolean}
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_lambda_function_event_invoke_config: {
      function_name: string
      id?: string
      maximum_event_age_in_seconds?: number
      maximum_retry_attempts?: number
      qualifier?: string
      destination_config?: {on_failure?: {destination: string}; on_success?: {destination: string}}
    }
    aws_iam_account_password_policy: {
      allow_users_to_change_password?: boolean
      expire_passwords?: boolean
      hard_expiry?: boolean
      id?: string
      max_password_age?: number
      minimum_password_length?: number
      password_reuse_prevention?: number
      require_lowercase_characters?: boolean
      require_numbers?: boolean
      require_symbols?: boolean
      require_uppercase_characters?: boolean
    }
    aws_codedeploy_deployment_config: {
      compute_platform?: string
      deployment_config_id?: string
      deployment_config_name: string
      id?: string
      minimum_healthy_hosts?: {type?: string; value?: number}
      traffic_routing_config?: {
        type?: string
        time_based_canary?: {interval?: number; percentage?: number}
        time_based_linear?: {interval?: number; percentage?: number}
      }
    }
    aws_eks_node_group: {
      ami_type?: string
      arn?: string
      cluster_name: string
      disk_size?: number
      force_update_version?: boolean
      id?: string
      instance_types?: Array<string>
      labels?: Record<string, string>
      node_group_name: string
      node_role_arn: string
      release_version?: string
      resources?: Array<{autoscaling_groups: Array<{name: string}>; remote_access_security_group_id: string}>
      status?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      version?: string
      remote_access?: {ec2_ssh_key?: string; source_security_group_ids?: Array<string>}
      scaling_config: {desired_size: number; max_size: number; min_size: number}
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_rds_cluster_parameter_group: {
      arn?: string
      description?: string
      family: string
      id?: string
      name?: string
      name_prefix?: string
      tags?: Record<string, string>
      parameter?: Array<{apply_method?: string; name: string; value: string}>
    }
    aws_organizations_account: {
      arn?: string
      email: string
      iam_user_access_to_billing?: string
      id?: string
      joined_method?: string
      joined_timestamp?: string
      name: string
      parent_id?: string
      role_name?: string
      status?: string
      tags?: Record<string, string>
    }
    aws_default_route_table: {
      default_route_table_id: string
      id?: string
      owner_id?: string
      propagating_vgws?: Array<string>
      route?: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      tags?: Record<string, string>
      vpc_id?: string
    }
    aws_dynamodb_table_item: {hash_key: string; id?: string; item: string; range_key?: string; table_name: string}
    aws_ec2_client_vpn_network_association: {
      client_vpn_endpoint_id: string
      id?: string
      security_groups?: Array<string>
      status?: string
      subnet_id: string
      vpc_id?: string
    }
    aws_waf_xss_match_set: {
      arn?: string
      id?: string
      name: string
      xss_match_tuples?: Array<{text_transformation: string; field_to_match: {data?: string; type: string}}>
    }
    aws_network_interface: {
      description?: string
      id?: string
      mac_address?: string
      outpost_arn?: string
      private_dns_name?: string
      private_ip?: string
      private_ips?: Array<string>
      private_ips_count?: number
      security_groups?: Array<string>
      source_dest_check?: boolean
      subnet_id: string
      tags?: Record<string, string>
      attachment?: Array<{attachment_id?: string; device_index: number; instance: string}>
    }
    aws_kinesis_video_stream: {
      arn?: string
      creation_time?: string
      data_retention_in_hours?: number
      device_name?: string
      id?: string
      kms_key_id?: string
      media_type?: string
      name: string
      tags?: Record<string, string>
      version?: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_datasync_location_nfs: {
      arn?: string
      id?: string
      server_hostname: string
      subdirectory: string
      tags?: Record<string, string>
      uri?: string
      on_prem_config: {agent_arns: Array<string>}
    }
    aws_route53_resolver_endpoint: {
      arn?: string
      direction: string
      host_vpc_id?: string
      id?: string
      name?: string
      security_group_ids: Array<string>
      tags?: Record<string, string>
      ip_address: Array<{ip?: string; ip_id?: string; subnet_id: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_ec2_transit_gateway_route_table: {
      default_association_route_table?: boolean
      default_propagation_route_table?: boolean
      id?: string
      tags?: Record<string, string>
      transit_gateway_id: string
    }
    aws_opsworks_php_app_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_lb_ssl_negotiation_policy: {
      id?: string
      lb_port: number
      load_balancer: string
      name: string
      attribute?: Array<{name: string; value: string}>
    }
    aws_codedeploy_app: {compute_platform?: string; id?: string; name: string; unique_id?: string}
    aws_sagemaker_notebook_instance: {
      arn?: string
      direct_internet_access?: string
      id?: string
      instance_type: string
      kms_key_id?: string
      lifecycle_config_name?: string
      name: string
      role_arn: string
      security_groups?: Array<string>
      subnet_id?: string
      tags?: Record<string, string>
    }
    aws_apigatewayv2_model: {
      api_id: string
      content_type: string
      description?: string
      id?: string
      name: string
      schema: string
    }
    aws_autoscaling_schedule: {
      arn?: string
      autoscaling_group_name: string
      desired_capacity?: number
      end_time?: string
      id?: string
      max_size?: number
      min_size?: number
      recurrence?: string
      scheduled_action_name: string
      start_time?: string
    }
    aws_opsworks_ganglia_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      password: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      url?: string
      use_ebs_optimized_instances?: boolean
      username?: string
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_lb_target_group_attachment: {
      availability_zone?: string
      id?: string
      port?: number
      target_group_arn: string
      target_id: string
    }
    aws_wafregional_byte_match_set: {
      id?: string
      name: string
      byte_match_tuple?: Array<{
        positional_constraint: string
        target_string?: string
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
      byte_match_tuples?: Array<{
        positional_constraint: string
        target_string?: string
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_elastic_beanstalk_environment: {
      all_settings?: Array<{name: string; namespace: string; resource: string; value: string}>
      application: string
      arn?: string
      autoscaling_groups?: Array<string>
      cname?: string
      cname_prefix?: string
      description?: string
      endpoint_url?: string
      id?: string
      instances?: Array<string>
      launch_configurations?: Array<string>
      load_balancers?: Array<string>
      name: string
      platform_arn?: string
      poll_interval?: string
      queues?: Array<string>
      solution_stack_name?: string
      tags?: Record<string, string>
      template_name?: string
      tier?: string
      triggers?: Array<string>
      version_label?: string
      wait_for_ready_timeout?: string
      setting?: Array<{name: string; namespace: string; resource?: string; value: string}>
    }
    aws_ec2_transit_gateway_route: {
      blackhole?: boolean
      destination_cidr_block: string
      id?: string
      transit_gateway_attachment_id?: string
      transit_gateway_route_table_id: string
    }
    aws_alb_target_group_attachment: {
      availability_zone?: string
      id?: string
      port?: number
      target_group_arn: string
      target_id: string
    }
    aws_launch_configuration: {
      arn?: string
      associate_public_ip_address?: boolean
      ebs_optimized?: boolean
      enable_monitoring?: boolean
      iam_instance_profile?: string
      id?: string
      image_id: string
      instance_type: string
      key_name?: string
      name?: string
      name_prefix?: string
      placement_tenancy?: string
      security_groups?: Array<string>
      spot_price?: string
      user_data?: string
      user_data_base64?: string
      vpc_classic_link_id?: string
      vpc_classic_link_security_groups?: Array<string>
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name: string
        encrypted?: boolean
        iops?: number
        no_device?: boolean
        snapshot_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name: string; virtual_name: string}>
      root_block_device?: {
        delete_on_termination?: boolean
        encrypted?: boolean
        iops?: number
        volume_size?: number
        volume_type?: string
      }
    }
    aws_appmesh_virtual_router: {
      arn?: string
      created_date?: string
      id?: string
      last_updated_date?: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
      spec: {service_names?: Array<string>; listener: {port_mapping: {port: number; protocol: string}}}
    }
    aws_autoscaling_lifecycle_hook: {
      autoscaling_group_name: string
      default_result?: string
      heartbeat_timeout?: number
      id?: string
      lifecycle_transition: string
      name: string
      notification_metadata?: string
      notification_target_arn?: string
      role_arn?: string
    }
    aws_api_gateway_usage_plan: {
      arn?: string
      description?: string
      id?: string
      name: string
      product_code?: string
      tags?: Record<string, string>
      api_stages?: Array<{api_id: string; stage: string}>
      quota_settings?: {limit: number; offset?: number; period: string}
      throttle_settings?: {burst_limit?: number; rate_limit?: number}
    }
    aws_fsx_lustre_file_system: {
      arn?: string
      dns_name?: string
      export_path?: string
      id?: string
      import_path?: string
      imported_file_chunk_size?: number
      network_interface_ids?: Array<string>
      owner_id?: string
      security_group_ids?: Array<string>
      storage_capacity: number
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      weekly_maintenance_start_time?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_simpledb_domain: {id?: string; name: string}
    aws_appmesh_mesh: {
      arn?: string
      created_date?: string
      id?: string
      last_updated_date?: string
      name: string
      tags?: Record<string, string>
      spec?: {egress_filter?: {type?: string}}
    }
    aws_waf_regex_match_set: {
      arn?: string
      id?: string
      name: string
      regex_match_tuple?: Array<{
        regex_pattern_set_id: string
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_security_group: {
      arn?: string
      description?: string
      egress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      id?: string
      ingress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      name?: string
      name_prefix?: string
      owner_id?: string
      revoke_rules_on_delete?: boolean
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_lightsail_static_ip_attachment: {
      id?: string
      instance_name: string
      ip_address?: string
      static_ip_name: string
    }
    aws_dx_hosted_private_virtual_interface_accepter: {
      arn?: string
      dx_gateway_id?: string
      id?: string
      tags?: Record<string, string>
      virtual_interface_id: string
      vpn_gateway_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_pinpoint_baidu_channel: {
      api_key: string
      application_id: string
      enabled?: boolean
      id?: string
      secret_key: string
    }
    aws_lb_target_group: {
      arn?: string
      arn_suffix?: string
      deregistration_delay?: number
      id?: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type?: string
      name?: string
      name_prefix?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
      health_check?: {
        enabled?: boolean
        healthy_threshold?: number
        interval?: number
        matcher?: string
        path?: string
        port?: string
        protocol?: string
        timeout?: number
        unhealthy_threshold?: number
      }
      stickiness?: {cookie_duration?: number; enabled?: boolean; type: string}
    }
    aws_elastic_beanstalk_application_version: {
      application: string
      arn?: string
      bucket: string
      description?: string
      force_delete?: boolean
      id?: string
      key: string
      name: string
      tags?: Record<string, string>
    }
    aws_route53_zone: {
      comment?: string
      delegation_set_id?: string
      force_destroy?: boolean
      id?: string
      name: string
      name_servers?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      vpc_region?: string
      zone_id?: string
      vpc?: Array<{vpc_id: string; vpc_region?: string}>
    }
    aws_opsworks_mysql_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      root_password?: string
      root_password_on_all_instances?: boolean
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_redshift_snapshot_schedule: {
      arn?: string
      definitions: Array<string>
      description?: string
      force_destroy?: boolean
      id?: string
      identifier?: string
      identifier_prefix?: string
      tags?: Record<string, string>
    }
    aws_apigatewayv2_authorizer: {
      api_id: string
      authorizer_credentials_arn?: string
      authorizer_type: string
      authorizer_uri?: string
      id?: string
      identity_sources: Array<string>
      name: string
      jwt_configuration?: {audience?: Array<string>; issuer?: string}
    }
    aws_spot_datafeed_subscription: {bucket: string; id?: string; prefix?: string}
    aws_ses_receipt_rule: {
      after?: string
      enabled?: boolean
      id?: string
      name: string
      recipients?: Array<string>
      rule_set_name: string
      scan_enabled?: boolean
      tls_policy?: string
      add_header_action?: Array<{header_name: string; header_value: string; position: number}>
      bounce_action?: Array<{
        message: string
        position: number
        sender: string
        smtp_reply_code: string
        status_code?: string
        topic_arn?: string
      }>
      lambda_action?: Array<{function_arn: string; invocation_type?: string; position: number; topic_arn?: string}>
      s3_action?: Array<{
        bucket_name: string
        kms_key_arn?: string
        object_key_prefix?: string
        position: number
        topic_arn?: string
      }>
      sns_action?: Array<{position: number; topic_arn: string}>
      stop_action?: Array<{position: number; scope: string; topic_arn?: string}>
      workmail_action?: Array<{organization_arn: string; position: number; topic_arn?: string}>
    }
    aws_lightsail_key_pair: {
      arn?: string
      encrypted_fingerprint?: string
      encrypted_private_key?: string
      fingerprint?: string
      id?: string
      name?: string
      name_prefix?: string
      pgp_key?: string
      private_key?: string
      public_key?: string
    }
    aws_wafregional_geo_match_set: {
      id?: string
      name: string
      geo_match_constraint?: Array<{type: string; value: string}>
    }
    aws_servicecatalog_portfolio: {
      arn?: string
      created_time?: string
      description?: string
      id?: string
      name: string
      provider_name?: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_lb_listener_rule: {
      arn?: string
      id?: string
      listener_arn: string
      priority?: number
      action: Array<{
        order?: number
        target_group_arn?: string
        type: string
        authenticate_cognito?: {
          authentication_request_extra_params?: Record<string, string>
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }
        authenticate_oidc?: {
          authentication_request_extra_params?: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          token_endpoint: string
          user_info_endpoint: string
        }
        fixed_response?: {content_type: string; message_body?: string; status_code?: string}
        forward?: {
          stickiness?: {duration: number; enabled?: boolean}
          target_group: Array<{arn: string; weight?: number}>
        }
        redirect?: {host?: string; path?: string; port?: string; protocol?: string; query?: string; status_code: string}
      }>
      condition: Array<{
        field?: string
        values?: Array<string>
        host_header?: {values?: Array<string>}
        http_header?: {http_header_name: string; values: Array<string>}
        http_request_method?: {values: Array<string>}
        path_pattern?: {values?: Array<string>}
        query_string?: Array<{key?: string; value: string}>
        source_ip?: {values: Array<string>}
      }>
    }
    aws_securityhub_standards_subscription: {id?: string; standards_arn: string}
    aws_vpc_endpoint_service_allowed_principal: {id?: string; principal_arn: string; vpc_endpoint_service_id: string}
    aws_ses_domain_identity: {arn?: string; domain: string; id?: string; verification_token?: string}
    aws_elasticache_cluster: {
      apply_immediately?: boolean
      arn?: string
      availability_zone?: string
      availability_zones?: Array<string>
      az_mode?: string
      cache_nodes?: Array<{address: string; availability_zone: string; id: string; port: number}>
      cluster_address?: string
      cluster_id: string
      configuration_endpoint?: string
      engine?: string
      engine_version?: string
      id?: string
      maintenance_window?: string
      node_type?: string
      notification_topic_arn?: string
      num_cache_nodes?: number
      parameter_group_name?: string
      port?: number
      preferred_availability_zones?: Array<string>
      replication_group_id?: string
      security_group_ids?: Array<string>
      security_group_names?: Array<string>
      snapshot_arns?: Array<string>
      snapshot_name?: string
      snapshot_retention_limit?: number
      snapshot_window?: string
      subnet_group_name?: string
      tags?: Record<string, string>
    }
    aws_cloudfront_distribution: {
      active_trusted_signers?: Record<string, string>
      aliases?: Array<string>
      arn?: string
      caller_reference?: string
      comment?: string
      default_root_object?: string
      domain_name?: string
      enabled: boolean
      etag?: string
      hosted_zone_id?: string
      http_version?: string
      id?: string
      in_progress_validation_batches?: number
      is_ipv6_enabled?: boolean
      last_modified_time?: string
      price_class?: string
      retain_on_delete?: boolean
      status?: string
      tags?: Record<string, string>
      wait_for_deployment?: boolean
      web_acl_id?: string
      cache_behavior?: Array<{
        allowed_methods: Array<string>
        cached_methods: Array<string>
        compress?: boolean
        default_ttl?: number
        field_level_encryption_id?: string
        max_ttl?: number
        min_ttl?: number
        path_pattern: string
        smooth_streaming?: boolean
        target_origin_id: string
        trusted_signers?: Array<string>
        viewer_protocol_policy: string
        forwarded_values: {
          headers?: Array<string>
          query_string: boolean
          query_string_cache_keys?: Array<string>
          cookies: {forward: string; whitelisted_names?: Array<string>}
        }
        lambda_function_association?: Array<{event_type: string; include_body?: boolean; lambda_arn: string}>
      }>
      custom_error_response?: Array<{
        error_caching_min_ttl?: number
        error_code: number
        response_code?: number
        response_page_path?: string
      }>
      default_cache_behavior: {
        allowed_methods: Array<string>
        cached_methods: Array<string>
        compress?: boolean
        default_ttl?: number
        field_level_encryption_id?: string
        max_ttl?: number
        min_ttl?: number
        smooth_streaming?: boolean
        target_origin_id: string
        trusted_signers?: Array<string>
        viewer_protocol_policy: string
        forwarded_values: {
          headers?: Array<string>
          query_string: boolean
          query_string_cache_keys?: Array<string>
          cookies: {forward: string; whitelisted_names?: Array<string>}
        }
        lambda_function_association?: Array<{event_type: string; include_body?: boolean; lambda_arn: string}>
      }
      logging_config?: {bucket: string; include_cookies?: boolean; prefix?: string}
      ordered_cache_behavior?: Array<{
        allowed_methods: Array<string>
        cached_methods: Array<string>
        compress?: boolean
        default_ttl?: number
        field_level_encryption_id?: string
        max_ttl?: number
        min_ttl?: number
        path_pattern: string
        smooth_streaming?: boolean
        target_origin_id: string
        trusted_signers?: Array<string>
        viewer_protocol_policy: string
        forwarded_values: {
          headers?: Array<string>
          query_string: boolean
          query_string_cache_keys?: Array<string>
          cookies: {forward: string; whitelisted_names?: Array<string>}
        }
        lambda_function_association?: Array<{event_type: string; include_body?: boolean; lambda_arn: string}>
      }>
      origin: Array<{
        domain_name: string
        origin_id: string
        origin_path?: string
        custom_header?: Array<{name: string; value: string}>
        custom_origin_config?: {
          http_port: number
          https_port: number
          origin_keepalive_timeout?: number
          origin_protocol_policy: string
          origin_read_timeout?: number
          origin_ssl_protocols: Array<string>
        }
        s3_origin_config?: {origin_access_identity: string}
      }>
      origin_group?: Array<{
        origin_id: string
        failover_criteria: {status_codes: Array<number>}
        member: Array<{origin_id: string}>
      }>
      restrictions: {geo_restriction: {locations?: Array<string>; restriction_type: string}}
      viewer_certificate: {
        acm_certificate_arn?: string
        cloudfront_default_certificate?: boolean
        iam_certificate_id?: string
        minimum_protocol_version?: string
        ssl_support_method?: string
      }
    }
    aws_db_snapshot: {
      allocated_storage?: number
      availability_zone?: string
      db_instance_identifier: string
      db_snapshot_arn?: string
      db_snapshot_identifier: string
      encrypted?: boolean
      engine?: string
      engine_version?: string
      id?: string
      iops?: number
      kms_key_id?: string
      license_model?: string
      option_group_name?: string
      port?: number
      snapshot_type?: string
      source_db_snapshot_identifier?: string
      source_region?: string
      status?: string
      storage_type?: string
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {read?: string}
    }
    aws_route53_query_log: {cloudwatch_log_group_arn: string; id?: string; zone_id: string}
    aws_route53_zone_association: {id?: string; vpc_id: string; vpc_region?: string; zone_id: string}
    aws_cloudformation_stack_set: {
      administration_role_arn: string
      arn?: string
      capabilities?: Array<string>
      description?: string
      execution_role_name?: string
      id?: string
      name: string
      parameters?: Record<string, string>
      stack_set_id?: string
      tags?: Record<string, string>
      template_body?: string
      template_url?: string
      timeouts?: {update?: string}
    }
    aws_ses_active_receipt_rule_set: {id?: string; rule_set_name: string}
    aws_pinpoint_sms_channel: {
      application_id: string
      enabled?: boolean
      id?: string
      promotional_messages_per_second?: number
      sender_id?: string
      short_code?: string
      transactional_messages_per_second?: number
    }
    aws_guardduty_organization_admin_account: {admin_account_id: string; id?: string}
    aws_wafregional_regex_match_set: {
      id?: string
      name: string
      regex_match_tuple?: Array<{
        regex_pattern_set_id: string
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_rds_global_cluster: {
      arn?: string
      database_name?: string
      deletion_protection?: boolean
      engine?: string
      engine_version?: string
      global_cluster_identifier: string
      global_cluster_resource_id?: string
      id?: string
      storage_encrypted?: boolean
    }
    aws_spot_instance_request: {
      ami: string
      arn?: string
      associate_public_ip_address?: boolean
      availability_zone?: string
      block_duration_minutes?: number
      cpu_core_count?: number
      cpu_threads_per_core?: number
      disable_api_termination?: boolean
      ebs_optimized?: boolean
      get_password_data?: boolean
      hibernation?: boolean
      host_id?: string
      iam_instance_profile?: string
      id?: string
      instance_initiated_shutdown_behavior?: string
      instance_interruption_behaviour?: string
      instance_state?: string
      instance_type: string
      ipv6_address_count?: number
      ipv6_addresses?: Array<string>
      key_name?: string
      launch_group?: string
      monitoring?: boolean
      network_interface_id?: string
      outpost_arn?: string
      password_data?: string
      placement_group?: string
      primary_network_interface_id?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      security_groups?: Array<string>
      source_dest_check?: boolean
      spot_bid_status?: string
      spot_instance_id?: string
      spot_price?: string
      spot_request_state?: string
      spot_type?: string
      subnet_id?: string
      tags?: Record<string, string>
      tenancy?: string
      user_data?: string
      user_data_base64?: string
      valid_from?: string
      valid_until?: string
      volume_tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      wait_for_fulfillment?: boolean
      credit_specification?: {cpu_credits?: string}
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name: string
        encrypted?: boolean
        iops?: number
        kms_key_id?: string
        snapshot_id?: string
        volume_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name: string; no_device?: boolean; virtual_name?: string}>
      metadata_options?: {http_endpoint?: string; http_put_response_hop_limit?: number; http_tokens?: string}
      network_interface?: Array<{delete_on_termination?: boolean; device_index: number; network_interface_id: string}>
      root_block_device?: {
        delete_on_termination?: boolean
        device_name?: string
        encrypted?: boolean
        iops?: number
        kms_key_id?: string
        volume_id?: string
        volume_size?: number
        volume_type?: string
      }
      timeouts?: {create?: string; delete?: string}
    }
    aws_volume_attachment: {
      device_name: string
      force_detach?: boolean
      id?: string
      instance_id: string
      skip_destroy?: boolean
      volume_id: string
    }
    aws_iot_role_alias: {alias: string; arn?: string; credential_duration?: number; id?: string; role_arn: string}
    aws_opsworks_instance: {
      agent_version?: string
      ami_id?: string
      architecture?: string
      auto_scaling_type?: string
      availability_zone?: string
      created_at?: string
      delete_ebs?: boolean
      delete_eip?: boolean
      ebs_optimized?: boolean
      ec2_instance_id?: string
      ecs_cluster_arn?: string
      elastic_ip?: string
      hostname?: string
      id?: string
      infrastructure_class?: string
      install_updates_on_boot?: boolean
      instance_profile_arn?: string
      instance_type?: string
      last_service_error_id?: string
      layer_ids: Array<string>
      os?: string
      platform?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      registered_by?: string
      reported_agent_version?: string
      reported_os_family?: string
      reported_os_name?: string
      reported_os_version?: string
      root_device_type?: string
      root_device_volume_id?: string
      security_group_ids?: Array<string>
      ssh_host_dsa_key_fingerprint?: string
      ssh_host_rsa_key_fingerprint?: string
      ssh_key_name?: string
      stack_id: string
      state?: string
      status?: string
      subnet_id?: string
      tenancy?: string
      virtualization_type?: string
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name: string
        iops?: number
        snapshot_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name: string; virtual_name: string}>
      root_block_device?: Array<{
        delete_on_termination?: boolean
        iops?: number
        volume_size?: number
        volume_type?: string
      }>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_efs_file_system: {
      arn?: string
      creation_token?: string
      dns_name?: string
      encrypted?: boolean
      id?: string
      kms_key_id?: string
      performance_mode?: string
      provisioned_throughput_in_mibps?: number
      reference_name?: string
      tags?: Record<string, string>
      throughput_mode?: string
      lifecycle_policy?: {transition_to_ia: string}
    }
    aws_iam_saml_provider: {
      arn?: string
      id?: string
      name: string
      saml_metadata_document: string
      valid_until?: string
    }
    aws_acm_certificate_validation: {
      certificate_arn: string
      id?: string
      validation_record_fqdns?: Array<string>
      timeouts?: {create?: string}
    }
    aws_default_vpc_dhcp_options: {
      domain_name?: string
      domain_name_servers?: string
      id?: string
      netbios_name_servers?: Array<string>
      netbios_node_type?: string
      ntp_servers?: string
      owner_id?: string
      tags?: Record<string, string>
    }
    aws_s3_bucket_public_access_block: {
      block_public_acls?: boolean
      block_public_policy?: boolean
      bucket: string
      id?: string
      ignore_public_acls?: boolean
      restrict_public_buckets?: boolean
    }
    aws_organizations_organization: {
      accounts?: Array<{arn: string; email: string; id: string; name: string; status: string}>
      arn?: string
      aws_service_access_principals?: Array<string>
      enabled_policy_types?: Array<string>
      feature_set?: string
      id?: string
      master_account_arn?: string
      master_account_email?: string
      master_account_id?: string
      non_master_accounts?: Array<{arn: string; email: string; id: string; name: string; status: string}>
      roots?: Array<{arn: string; id: string; name: string; policy_types: Array<{status: string; type: string}>}>
    }
    aws_lb: {
      arn?: string
      arn_suffix?: string
      dns_name?: string
      drop_invalid_header_fields?: boolean
      enable_cross_zone_load_balancing?: boolean
      enable_deletion_protection?: boolean
      enable_http2?: boolean
      id?: string
      idle_timeout?: number
      internal?: boolean
      ip_address_type?: string
      load_balancer_type?: string
      name?: string
      name_prefix?: string
      security_groups?: Array<string>
      subnets?: Array<string>
      tags?: Record<string, string>
      vpc_id?: string
      zone_id?: string
      access_logs?: {bucket: string; enabled?: boolean; prefix?: string}
      subnet_mapping?: Array<{allocation_id?: string; subnet_id: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_s3_bucket_policy: {bucket: string; id?: string; policy: string}
    aws_api_gateway_documentation_version: {description?: string; id?: string; rest_api_id: string; version: string}
    aws_cloudwatch_event_rule: {
      arn?: string
      description?: string
      event_pattern?: string
      id?: string
      is_enabled?: boolean
      name?: string
      name_prefix?: string
      role_arn?: string
      schedule_expression?: string
      tags?: Record<string, string>
    }
    aws_pinpoint_apns_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id?: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_apigatewayv2_route: {
      api_id: string
      api_key_required?: boolean
      authorization_scopes?: Array<string>
      authorization_type?: string
      authorizer_id?: string
      id?: string
      model_selection_expression?: string
      operation_name?: string
      request_models?: Record<string, string>
      route_key: string
      route_response_selection_expression?: string
      target?: string
    }
    aws_cloudwatch_log_group: {
      arn?: string
      id?: string
      kms_key_id?: string
      name?: string
      name_prefix?: string
      retention_in_days?: number
      tags?: Record<string, string>
    }
    aws_sns_platform_application: {
      arn?: string
      event_delivery_failure_topic_arn?: string
      event_endpoint_created_topic_arn?: string
      event_endpoint_deleted_topic_arn?: string
      event_endpoint_updated_topic_arn?: string
      failure_feedback_role_arn?: string
      id?: string
      name: string
      platform: string
      platform_credential: string
      platform_principal?: string
      success_feedback_role_arn?: string
      success_feedback_sample_rate?: string
    }
    aws_iam_server_certificate: {
      arn?: string
      certificate_body: string
      certificate_chain?: string
      id?: string
      name?: string
      name_prefix?: string
      path?: string
      private_key: string
    }
    aws_eks_fargate_profile: {
      arn?: string
      cluster_name: string
      fargate_profile_name: string
      id?: string
      pod_execution_role_arn: string
      status?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      selector: Array<{labels?: Record<string, string>; namespace: string}>
      timeouts?: {create?: string; delete?: string}
    }
    aws_elastictranscoder_pipeline: {
      arn?: string
      aws_kms_key_arn?: string
      id?: string
      input_bucket: string
      name?: string
      output_bucket?: string
      role: string
      content_config?: {bucket?: string; storage_class?: string}
      content_config_permissions?: Array<{access?: Array<string>; grantee?: string; grantee_type?: string}>
      notifications?: {completed?: string; error?: string; progressing?: string; warning?: string}
      thumbnail_config?: {bucket?: string; storage_class?: string}
      thumbnail_config_permissions?: Array<{access?: Array<string>; grantee?: string; grantee_type?: string}>
    }
    aws_eip: {
      allocation_id?: string
      associate_with_private_ip?: string
      association_id?: string
      customer_owned_ip?: string
      customer_owned_ipv4_pool?: string
      domain?: string
      id?: string
      instance?: string
      network_interface?: string
      private_dns?: string
      private_ip?: string
      public_dns?: string
      public_ip?: string
      public_ipv4_pool?: string
      tags?: Record<string, string>
      vpc?: boolean
      timeouts?: {delete?: string; read?: string; update?: string}
    }
    aws_ses_template: {html?: string; id?: string; name: string; subject?: string; text?: string}
    aws_eks_cluster: {
      arn?: string
      certificate_authority?: Array<{data: string}>
      created_at?: string
      enabled_cluster_log_types?: Array<string>
      endpoint?: string
      id?: string
      identity?: Array<{oidc: Array<{issuer: string}>}>
      name: string
      platform_version?: string
      role_arn: string
      status?: string
      tags?: Record<string, string>
      version?: string
      encryption_config?: {resources: Array<string>; provider: {key_arn: string}}
      timeouts?: {create?: string; delete?: string; update?: string}
      vpc_config: {
        cluster_security_group_id?: string
        endpoint_private_access?: boolean
        endpoint_public_access?: boolean
        public_access_cidrs?: Array<string>
        security_group_ids?: Array<string>
        subnet_ids: Array<string>
        vpc_id?: string
      }
    }
    aws_neptune_cluster_snapshot: {
      allocated_storage?: number
      availability_zones?: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn?: string
      db_cluster_snapshot_identifier: string
      engine?: string
      engine_version?: string
      id?: string
      kms_key_id?: string
      license_model?: string
      port?: number
      snapshot_type?: string
      source_db_cluster_snapshot_arn?: string
      status?: string
      storage_encrypted?: boolean
      vpc_id?: string
      timeouts?: {create?: string}
    }
    aws_ssm_patch_baseline: {
      approved_patches?: Array<string>
      approved_patches_compliance_level?: string
      description?: string
      id?: string
      name: string
      operating_system?: string
      rejected_patches?: Array<string>
      tags?: Record<string, string>
      approval_rule?: Array<{
        approve_after_days: number
        compliance_level?: string
        enable_non_security?: boolean
        patch_filter: Array<{key: string; values: Array<string>}>
      }>
      global_filter?: Array<{key: string; values: Array<string>}>
    }
    aws_route_table_association: {gateway_id?: string; id?: string; route_table_id: string; subnet_id?: string}
    aws_wafregional_size_constraint_set: {
      arn?: string
      id?: string
      name: string
      size_constraints?: Array<{
        comparison_operator: string
        size: number
        text_transformation: string
        field_to_match: {data?: string; type: string}
      }>
    }
    aws_glue_job: {
      allocated_capacity?: number
      arn?: string
      connections?: Array<string>
      default_arguments?: Record<string, string>
      description?: string
      glue_version?: string
      id?: string
      max_capacity?: number
      max_retries?: number
      name: string
      number_of_workers?: number
      role_arn: string
      security_configuration?: string
      tags?: Record<string, string>
      timeout?: number
      worker_type?: string
      command: {name?: string; python_version?: string; script_location: string}
      execution_property?: {max_concurrent_runs?: number}
      notification_property?: {notify_delay_after?: number}
    }
    aws_apigatewayv2_api_mapping: {
      api_id: string
      api_mapping_key?: string
      domain_name: string
      id?: string
      stage: string
    }
    aws_service_discovery_private_dns_namespace: {
      arn?: string
      description?: string
      hosted_zone?: string
      id?: string
      name: string
      vpc: string
    }
    aws_s3_bucket_metric: {
      bucket: string
      id?: string
      name: string
      filter?: {prefix?: string; tags?: Record<string, string>}
    }
    aws_route53_delegation_set: {id?: string; name_servers?: Array<string>; reference_name?: string}
    aws_backup_vault: {
      arn?: string
      id?: string
      kms_key_arn?: string
      name: string
      recovery_points?: number
      tags?: Record<string, string>
    }
    aws_codebuild_webhook: {
      branch_filter?: string
      id?: string
      payload_url?: string
      project_name: string
      secret?: string
      url?: string
      filter_group?: Array<{filter?: Array<{exclude_matched_pattern?: boolean; pattern: string; type: string}>}>
    }
    aws_dynamodb_global_table: {
      arn?: string
      id?: string
      name: string
      replica: Array<{region_name: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_ec2_traffic_mirror_filter_rule: {
      description?: string
      destination_cidr_block: string
      id?: string
      protocol?: number
      rule_action: string
      rule_number: number
      source_cidr_block: string
      traffic_direction: string
      traffic_mirror_filter_id: string
      destination_port_range?: {from_port?: number; to_port?: number}
      source_port_range?: {from_port?: number; to_port?: number}
    }
    aws_cloudformation_stack_set_instance: {
      account_id?: string
      id?: string
      parameter_overrides?: Record<string, string>
      region?: string
      retain_stack?: boolean
      stack_id?: string
      stack_set_name: string
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_iam_user_login_profile: {
      encrypted_password?: string
      id?: string
      key_fingerprint?: string
      password_length?: number
      password_reset_required?: boolean
      pgp_key: string
      user: string
    }
    aws_default_subnet: {
      arn?: string
      assign_ipv6_address_on_creation?: boolean
      availability_zone: string
      availability_zone_id?: string
      cidr_block?: string
      id?: string
      ipv6_cidr_block?: string
      ipv6_cidr_block_association_id?: string
      map_public_ip_on_launch?: boolean
      outpost_arn?: string
      owner_id?: string
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_ec2_transit_gateway: {
      amazon_side_asn?: number
      arn?: string
      association_default_route_table_id?: string
      auto_accept_shared_attachments?: string
      default_route_table_association?: string
      default_route_table_propagation?: string
      description?: string
      dns_support?: string
      id?: string
      owner_id?: string
      propagation_default_route_table_id?: string
      tags?: Record<string, string>
      vpn_ecmp_support?: string
    }
    aws_dx_hosted_private_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      id?: string
      jumbo_frame_capable?: boolean
      mtu?: number
      name: string
      owner_account_id: string
      vlan: number
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_sfn_state_machine: {
      creation_date?: string
      definition: string
      id?: string
      name: string
      role_arn: string
      status?: string
      tags?: Record<string, string>
    }
    aws_acmpca_certificate_authority: {
      arn?: string
      certificate?: string
      certificate_chain?: string
      certificate_signing_request?: string
      enabled?: boolean
      id?: string
      not_after?: string
      not_before?: string
      permanent_deletion_time_in_days?: number
      serial?: string
      status?: string
      tags?: Record<string, string>
      type?: string
      certificate_authority_configuration: {
        key_algorithm: string
        signing_algorithm: string
        subject: {
          common_name?: string
          country?: string
          distinguished_name_qualifier?: string
          generation_qualifier?: string
          given_name?: string
          initials?: string
          locality?: string
          organization?: string
          organizational_unit?: string
          pseudonym?: string
          state?: string
          surname?: string
          title?: string
        }
      }
      revocation_configuration?: {
        crl_configuration?: {
          custom_cname?: string
          enabled?: boolean
          expiration_in_days: number
          s3_bucket_name?: string
        }
      }
      timeouts?: {create?: string}
    }
    aws_api_gateway_integration: {
      cache_key_parameters?: Array<string>
      cache_namespace?: string
      connection_id?: string
      connection_type?: string
      content_handling?: string
      credentials?: string
      http_method: string
      id?: string
      integration_http_method?: string
      passthrough_behavior?: string
      request_parameters?: Record<string, string>
      request_parameters_in_json?: string
      request_templates?: Record<string, string>
      resource_id: string
      rest_api_id: string
      timeout_milliseconds?: number
      type: string
      uri?: string
    }
    aws_waf_sql_injection_match_set: {
      id?: string
      name: string
      sql_injection_match_tuples?: Array<{text_transformation: string; field_to_match: {data?: string; type: string}}>
    }
    aws_ses_receipt_filter: {cidr: string; id?: string; name: string; policy: string}
    aws_waf_rule_group: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      activated_rule?: Array<{priority: number; rule_id: string; type?: string; action: {type: string}}>
    }
    aws_config_organization_custom_rule: {
      arn?: string
      description?: string
      excluded_accounts?: Array<string>
      id?: string
      input_parameters?: string
      lambda_function_arn: string
      maximum_execution_frequency?: string
      name: string
      resource_id_scope?: string
      resource_types_scope?: Array<string>
      tag_key_scope?: string
      tag_value_scope?: string
      trigger_types: Array<string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_opsworks_user_profile: {
      allow_self_management?: boolean
      id?: string
      ssh_public_key?: string
      ssh_username: string
      user_arn: string
    }
    aws_autoscaling_notification: {
      group_names: Array<string>
      id?: string
      notifications: Array<string>
      topic_arn: string
    }
    aws_ses_domain_dkim: {dkim_tokens?: Array<string>; domain: string; id?: string}
    aws_cognito_user_pool_client: {
      allowed_oauth_flows?: Array<string>
      allowed_oauth_flows_user_pool_client?: boolean
      allowed_oauth_scopes?: Array<string>
      callback_urls?: Array<string>
      client_secret?: string
      default_redirect_uri?: string
      explicit_auth_flows?: Array<string>
      generate_secret?: boolean
      id?: string
      logout_urls?: Array<string>
      name: string
      prevent_user_existence_errors?: string
      read_attributes?: Array<string>
      refresh_token_validity?: number
      supported_identity_providers?: Array<string>
      user_pool_id: string
      write_attributes?: Array<string>
      analytics_configuration?: {
        application_id: string
        external_id: string
        role_arn: string
        user_data_shared?: boolean
      }
    }
    aws_route53_record: {
      allow_overwrite?: boolean
      fqdn?: string
      health_check_id?: string
      id?: string
      multivalue_answer_routing_policy?: boolean
      name: string
      records?: Array<string>
      set_identifier?: string
      ttl?: number
      type: string
      zone_id: string
      alias?: Array<{evaluate_target_health: boolean; name: string; zone_id: string}>
      failover_routing_policy?: Array<{type: string}>
      geolocation_routing_policy?: Array<{continent?: string; country?: string; subdivision?: string}>
      latency_routing_policy?: Array<{region: string}>
      weighted_routing_policy?: Array<{weight: number}>
    }
    aws_cloudtrail: {
      arn?: string
      cloud_watch_logs_group_arn?: string
      cloud_watch_logs_role_arn?: string
      enable_log_file_validation?: boolean
      enable_logging?: boolean
      home_region?: string
      id?: string
      include_global_service_events?: boolean
      is_multi_region_trail?: boolean
      is_organization_trail?: boolean
      kms_key_id?: string
      name: string
      s3_bucket_name: string
      s3_key_prefix?: string
      sns_topic_name?: string
      tags?: Record<string, string>
      event_selector?: Array<{
        include_management_events?: boolean
        read_write_type?: string
        data_resource?: Array<{type: string; values: Array<string>}>
      }>
    }
    aws_appmesh_virtual_node: {
      arn?: string
      created_date?: string
      id?: string
      last_updated_date?: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
      spec: {
        backends?: Array<string>
        backend?: Array<{virtual_service?: {virtual_service_name: string}}>
        listener?: {
          health_check?: {
            healthy_threshold: number
            interval_millis: number
            path?: string
            port?: number
            protocol: string
            timeout_millis: number
            unhealthy_threshold: number
          }
          port_mapping: {port: number; protocol: string}
        }
        logging?: {access_log?: {file?: {path: string}}}
        service_discovery?: {
          aws_cloud_map?: {attributes?: Record<string, string>; namespace_name: string; service_name: string}
          dns?: {hostname: string; service_name?: string}
        }
      }
    }
    aws_servicequotas_service_quota: {
      adjustable?: boolean
      arn?: string
      default_value?: number
      id?: string
      quota_code: string
      quota_name?: string
      request_id?: string
      request_status?: string
      service_code: string
      service_name?: string
      value: number
    }
    aws_autoscaling_attachment: {
      alb_target_group_arn?: string
      autoscaling_group_name: string
      elb?: string
      id?: string
    }
    aws_route: {
      destination_cidr_block?: string
      destination_ipv6_cidr_block?: string
      destination_prefix_list_id?: string
      egress_only_gateway_id?: string
      gateway_id?: string
      id?: string
      instance_id?: string
      instance_owner_id?: string
      nat_gateway_id?: string
      network_interface_id?: string
      origin?: string
      route_table_id: string
      state?: string
      transit_gateway_id?: string
      vpc_peering_connection_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_route53_resolver_rule: {
      arn?: string
      domain_name: string
      id?: string
      name?: string
      owner_id?: string
      resolver_endpoint_id?: string
      rule_type: string
      share_status?: string
      tags?: Record<string, string>
      target_ip?: Array<{ip: string; port?: number}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_kms_key: {
      arn?: string
      customer_master_key_spec?: string
      deletion_window_in_days?: number
      description?: string
      enable_key_rotation?: boolean
      id?: string
      is_enabled?: boolean
      key_id?: string
      key_usage?: string
      policy?: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_log_destination_policy: {access_policy: string; destination_name: string; id?: string}
    aws_licensemanager_license_configuration: {
      description?: string
      id?: string
      license_count?: number
      license_count_hard_limit?: boolean
      license_counting_type: string
      license_rules?: Array<string>
      name: string
      tags?: Record<string, string>
    }
    aws_sns_topic_subscription: {
      arn?: string
      confirmation_timeout_in_minutes?: number
      delivery_policy?: string
      endpoint: string
      endpoint_auto_confirms?: boolean
      filter_policy?: string
      id?: string
      protocol: string
      raw_message_delivery?: boolean
      topic_arn: string
    }
    aws_internet_gateway: {id?: string; owner_id?: string; tags?: Record<string, string>; vpc_id?: string}
    aws_elb: {
      arn?: string
      availability_zones?: Array<string>
      connection_draining?: boolean
      connection_draining_timeout?: number
      cross_zone_load_balancing?: boolean
      dns_name?: string
      id?: string
      idle_timeout?: number
      instances?: Array<string>
      internal?: boolean
      name?: string
      name_prefix?: string
      security_groups?: Array<string>
      source_security_group?: string
      source_security_group_id?: string
      subnets?: Array<string>
      tags?: Record<string, string>
      zone_id?: string
      access_logs?: {bucket: string; bucket_prefix?: string; enabled?: boolean; interval?: number}
      health_check?: {
        healthy_threshold: number
        interval: number
        target: string
        timeout: number
        unhealthy_threshold: number
      }
      listener: Array<{
        instance_port: number
        instance_protocol: string
        lb_port: number
        lb_protocol: string
        ssl_certificate_id?: string
      }>
    }
    aws_ssm_patch_group: {baseline_id: string; id?: string; patch_group: string}
    aws_inspector_assessment_target: {arn?: string; id?: string; name: string; resource_group_arn?: string}
    aws_ssm_association: {
      association_id?: string
      association_name?: string
      automation_target_parameter_name?: string
      compliance_severity?: string
      document_version?: string
      id?: string
      instance_id?: string
      max_concurrency?: string
      max_errors?: string
      name: string
      parameters?: Record<string, string>
      schedule_expression?: string
      output_location?: {s3_bucket_name: string; s3_key_prefix?: string}
      targets?: Array<{key: string; values: Array<string>}>
    }
    aws_sagemaker_model: {
      arn?: string
      enable_network_isolation?: boolean
      execution_role_arn: string
      id?: string
      name?: string
      tags?: Record<string, string>
      container?: Array<{
        container_hostname?: string
        environment?: Record<string, string>
        image: string
        model_data_url?: string
      }>
      primary_container?: {
        container_hostname?: string
        environment?: Record<string, string>
        image: string
        model_data_url?: string
      }
      vpc_config?: {security_group_ids: Array<string>; subnets: Array<string>}
    }
    aws_flow_log: {
      eni_id?: string
      iam_role_arn?: string
      id?: string
      log_destination?: string
      log_destination_type?: string
      log_format?: string
      log_group_name?: string
      max_aggregation_interval?: number
      subnet_id?: string
      tags?: Record<string, string>
      traffic_type: string
      vpc_id?: string
    }
    aws_docdb_cluster: {
      apply_immediately?: boolean
      arn?: string
      availability_zones?: Array<string>
      backup_retention_period?: number
      cluster_identifier?: string
      cluster_identifier_prefix?: string
      cluster_members?: Array<string>
      cluster_resource_id?: string
      db_cluster_parameter_group_name?: string
      db_subnet_group_name?: string
      deletion_protection?: boolean
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_version?: string
      final_snapshot_identifier?: string
      hosted_zone_id?: string
      id?: string
      kms_key_id?: string
      master_password?: string
      master_username?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      reader_endpoint?: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_appsync_graphql_api: {
      arn?: string
      authentication_type: string
      id?: string
      name: string
      schema?: string
      tags?: Record<string, string>
      uris?: Record<string, string>
      xray_enabled?: boolean
      additional_authentication_provider?: Array<{
        authentication_type: string
        openid_connect_config?: {auth_ttl?: number; client_id?: string; iat_ttl?: number; issuer: string}
        user_pool_config?: {app_id_client_regex?: string; aws_region?: string; user_pool_id: string}
      }>
      log_config?: {cloudwatch_logs_role_arn: string; exclude_verbose_content?: boolean; field_log_level: string}
      openid_connect_config?: {auth_ttl?: number; client_id?: string; iat_ttl?: number; issuer: string}
      user_pool_config?: {
        app_id_client_regex?: string
        aws_region?: string
        default_action: string
        user_pool_id: string
      }
    }
    aws_iam_policy_attachment: {
      groups?: Array<string>
      id?: string
      name: string
      policy_arn: string
      roles?: Array<string>
      users?: Array<string>
    }
    aws_gamelift_game_session_queue: {
      arn?: string
      destinations?: Array<string>
      id?: string
      name: string
      tags?: Record<string, string>
      timeout_in_seconds?: number
      player_latency_policy?: Array<{
        maximum_individual_player_latency_milliseconds: number
        policy_duration_seconds?: number
      }>
    }
    aws_cloudformation_stack: {
      capabilities?: Array<string>
      disable_rollback?: boolean
      iam_role_arn?: string
      id?: string
      name: string
      notification_arns?: Array<string>
      on_failure?: string
      outputs?: Record<string, string>
      parameters?: Record<string, string>
      policy_body?: string
      policy_url?: string
      tags?: Record<string, string>
      template_body?: string
      template_url?: string
      timeout_in_minutes?: number
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_load_balancer_listener_policy: {
      id?: string
      load_balancer_name: string
      load_balancer_port: number
      policy_names?: Array<string>
    }
    aws_api_gateway_gateway_response: {
      id?: string
      response_parameters?: Record<string, string>
      response_templates?: Record<string, string>
      response_type: string
      rest_api_id: string
      status_code?: string
    }
    aws_quicksight_group: {
      arn?: string
      aws_account_id?: string
      description?: string
      group_name: string
      id?: string
      namespace?: string
    }
    aws_storagegateway_smb_file_share: {
      arn?: string
      authentication?: string
      default_storage_class?: string
      fileshare_id?: string
      gateway_arn: string
      guess_mime_type_enabled?: boolean
      id?: string
      invalid_user_list?: Array<string>
      kms_encrypted?: boolean
      kms_key_arn?: string
      location_arn: string
      object_acl?: string
      path?: string
      read_only?: boolean
      requester_pays?: boolean
      role_arn: string
      tags?: Record<string, string>
      valid_user_list?: Array<string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_codepipeline: {
      arn?: string
      id?: string
      name: string
      role_arn: string
      tags?: Record<string, string>
      artifact_store: Array<{
        location: string
        region?: string
        type: string
        encryption_key?: {id: string; type: string}
      }>
      stage: Array<{
        name: string
        action: Array<{
          category: string
          configuration?: Record<string, string>
          input_artifacts?: Array<string>
          name: string
          namespace?: string
          output_artifacts?: Array<string>
          owner: string
          provider: string
          region?: string
          role_arn?: string
          run_order?: number
          version: string
        }>
      }>
    }
    aws_dx_transit_virtual_interface: {
      address_family: string
      amazon_address?: string
      amazon_side_asn?: string
      arn?: string
      aws_device?: string
      bgp_asn: number
      bgp_auth_key?: string
      connection_id: string
      customer_address?: string
      dx_gateway_id: string
      id?: string
      jumbo_frame_capable?: boolean
      mtu?: number
      name: string
      tags?: Record<string, string>
      vlan: number
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_cognito_user_pool_domain: {
      aws_account_id?: string
      certificate_arn?: string
      cloudfront_distribution_arn?: string
      domain: string
      id?: string
      s3_bucket?: string
      user_pool_id: string
      version?: string
    }
    aws_ses_email_identity: {arn?: string; email: string; id?: string}
    aws_iam_user: {
      arn?: string
      force_destroy?: boolean
      id?: string
      name: string
      path?: string
      permissions_boundary?: string
      tags?: Record<string, string>
      unique_id?: string
    }
    aws_alb_listener: {
      arn?: string
      certificate_arn?: string
      id?: string
      load_balancer_arn: string
      port: number
      protocol?: string
      ssl_policy?: string
      default_action: Array<{
        order?: number
        target_group_arn?: string
        type: string
        authenticate_cognito?: {
          authentication_request_extra_params?: Record<string, string>
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }
        authenticate_oidc?: {
          authentication_request_extra_params?: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request?: string
          scope?: string
          session_cookie_name?: string
          session_timeout?: number
          token_endpoint: string
          user_info_endpoint: string
        }
        fixed_response?: {content_type: string; message_body?: string; status_code?: string}
        forward?: {
          stickiness?: {duration: number; enabled?: boolean}
          target_group: Array<{arn: string; weight?: number}>
        }
        redirect?: {host?: string; path?: string; port?: string; protocol?: string; query?: string; status_code: string}
      }>
      timeouts?: {read?: string}
    }
    aws_inspector_assessment_template: {
      arn?: string
      duration: number
      id?: string
      name: string
      rules_package_arns: Array<string>
      tags?: Record<string, string>
      target_arn: string
    }
    aws_emr_security_configuration: {
      configuration: string
      creation_date?: string
      id?: string
      name?: string
      name_prefix?: string
    }
    aws_api_gateway_base_path_mapping: {
      api_id: string
      base_path?: string
      domain_name: string
      id?: string
      stage_name?: string
    }
    aws_macie_s3_bucket_association: {
      bucket_name: string
      id?: string
      member_account_id?: string
      prefix?: string
      classification_type?: {continuous?: string; one_time?: string}
    }
    aws_config_delivery_channel: {
      id?: string
      name?: string
      s3_bucket_name: string
      s3_key_prefix?: string
      sns_topic_arn?: string
      snapshot_delivery_properties?: {delivery_frequency?: string}
    }
    aws_datasync_location_smb: {
      agent_arns: Array<string>
      arn?: string
      domain?: string
      id?: string
      password: string
      server_hostname: string
      subdirectory: string
      tags?: Record<string, string>
      uri?: string
      user: string
      mount_options?: {version?: string}
    }
    aws_apigatewayv2_integration_response: {
      api_id: string
      content_handling_strategy?: string
      id?: string
      integration_id: string
      integration_response_key: string
      response_templates?: Record<string, string>
      template_selection_expression?: string
    }
    aws_cognito_identity_provider: {
      attribute_mapping?: Record<string, string>
      id?: string
      idp_identifiers?: Array<string>
      provider_details: Record<string, string>
      provider_name: string
      provider_type: string
      user_pool_id: string
    }
    aws_docdb_cluster_instance: {
      apply_immediately?: boolean
      arn?: string
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      ca_cert_identifier?: string
      cluster_identifier: string
      db_subnet_group_name?: string
      dbi_resource_id?: string
      endpoint?: string
      engine?: string
      engine_version?: string
      id?: string
      identifier?: string
      identifier_prefix?: string
      instance_class: string
      kms_key_id?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      promotion_tier?: number
      publicly_accessible?: boolean
      storage_encrypted?: boolean
      tags?: Record<string, string>
      writer?: boolean
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_inspector_resource_group: {arn?: string; id?: string; tags: Record<string, string>}
    aws_api_gateway_integration_response: {
      content_handling?: string
      http_method: string
      id?: string
      resource_id: string
      response_parameters?: Record<string, string>
      response_parameters_in_json?: string
      response_templates?: Record<string, string>
      rest_api_id: string
      selection_pattern?: string
      status_code: string
    }
    aws_ssm_maintenance_window_task: {
      description?: string
      id?: string
      max_concurrency: string
      max_errors: string
      name?: string
      priority?: number
      service_role_arn: string
      task_arn: string
      task_type: string
      window_id: string
      logging_info?: {s3_bucket_name: string; s3_bucket_prefix?: string; s3_region: string}
      targets: Array<{key: string; values: Array<string>}>
      task_invocation_parameters?: {
        automation_parameters?: {document_version?: string; parameter?: Array<{name: string; values: Array<string>}>}
        lambda_parameters?: {client_context?: string; payload?: string; qualifier?: string}
        run_command_parameters?: {
          comment?: string
          document_hash?: string
          document_hash_type?: string
          output_s3_bucket?: string
          output_s3_key_prefix?: string
          service_role_arn?: string
          timeout_seconds?: number
          notification_config?: {
            notification_arn?: string
            notification_events?: Array<string>
            notification_type?: string
          }
          parameter?: Array<{name: string; values: Array<string>}>
        }
        step_functions_parameters?: {input?: string; name?: string}
      }
      task_parameters?: Array<{name: string; values: Array<string>}>
    }
    aws_iam_policy: {
      arn?: string
      description?: string
      id?: string
      name?: string
      name_prefix?: string
      path?: string
      policy: string
    }
    aws_appsync_resolver: {
      api_id: string
      arn?: string
      data_source?: string
      field: string
      id?: string
      kind?: string
      request_template: string
      response_template: string
      type: string
      caching_config?: {caching_keys?: Array<string>; ttl?: number}
      pipeline_config?: {functions?: Array<string>}
    }
    aws_default_security_group: {
      arn?: string
      description?: string
      egress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      id?: string
      ingress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      name?: string
      owner_id?: string
      revoke_rules_on_delete?: boolean
      tags?: Record<string, string>
      vpc_id?: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_iam_role_policy_attachment: {id?: string; policy_arn: string; role: string}
    aws_workspaces_directory: {
      alias?: string
      customer_user_name?: string
      directory_id: string
      directory_name?: string
      directory_type?: string
      dns_ip_addresses?: Array<string>
      iam_role_id?: string
      id?: string
      ip_group_ids?: Array<string>
      registration_code?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      workspace_security_group_id?: string
      self_service_permissions?: {
        change_compute_type?: boolean
        increase_volume_size?: boolean
        rebuild_workspace?: boolean
        restart_workspace?: boolean
        switch_running_mode?: boolean
      }
    }
    aws_datapipeline_pipeline: {description?: string; id?: string; name: string; tags?: Record<string, string>}
    aws_ebs_snapshot_copy: {
      data_encryption_key_id?: string
      description?: string
      encrypted?: boolean
      id?: string
      kms_key_id?: string
      owner_alias?: string
      owner_id?: string
      source_region: string
      source_snapshot_id: string
      tags?: Record<string, string>
      volume_id?: string
      volume_size?: number
    }
    aws_glue_catalog_table: {
      catalog_id?: string
      database_name: string
      description?: string
      id?: string
      name: string
      owner?: string
      parameters?: Record<string, string>
      retention?: number
      table_type?: string
      view_expanded_text?: string
      view_original_text?: string
      partition_keys?: Array<{comment?: string; name: string; type?: string}>
      storage_descriptor?: {
        bucket_columns?: Array<string>
        compressed?: boolean
        input_format?: string
        location?: string
        number_of_buckets?: number
        output_format?: string
        parameters?: Record<string, string>
        stored_as_sub_directories?: boolean
        columns?: Array<{comment?: string; name: string; type?: string}>
        ser_de_info?: {name?: string; parameters?: Record<string, string>; serialization_library?: string}
        skewed_info?: {
          skewed_column_names?: Array<string>
          skewed_column_value_location_maps?: Record<string, string>
          skewed_column_values?: Array<string>
        }
        sort_columns?: Array<{column: string; sort_order: number}>
      }
    }
    aws_subnet: {
      arn?: string
      assign_ipv6_address_on_creation?: boolean
      availability_zone?: string
      availability_zone_id?: string
      cidr_block: string
      id?: string
      ipv6_cidr_block?: string
      ipv6_cidr_block_association_id?: string
      map_public_ip_on_launch?: boolean
      outpost_arn?: string
      owner_id?: string
      tags?: Record<string, string>
      vpc_id: string
      timeouts?: {create?: string; delete?: string}
    }
    aws_cognito_identity_pool: {
      allow_unauthenticated_identities?: boolean
      arn?: string
      developer_provider_name?: string
      id?: string
      identity_pool_name: string
      openid_connect_provider_arns?: Array<string>
      saml_provider_arns?: Array<string>
      supported_login_providers?: Record<string, string>
      tags?: Record<string, string>
      cognito_identity_providers?: Array<{
        client_id?: string
        provider_name?: string
        server_side_token_check?: boolean
      }>
    }
    aws_customer_gateway: {
      bgp_asn: number
      id?: string
      ip_address: string
      tags?: Record<string, string>
      type: string
    }
    aws_apigatewayv2_stage: {
      api_id: string
      arn?: string
      auto_deploy?: boolean
      client_certificate_id?: string
      deployment_id?: string
      description?: string
      execution_arn?: string
      id?: string
      invoke_url?: string
      name: string
      stage_variables?: Record<string, string>
      tags?: Record<string, string>
      access_log_settings?: {destination_arn: string; format: string}
      default_route_settings?: {
        data_trace_enabled?: boolean
        detailed_metrics_enabled?: boolean
        logging_level?: string
        throttling_burst_limit?: number
        throttling_rate_limit?: number
      }
      route_settings?: Array<{
        data_trace_enabled?: boolean
        detailed_metrics_enabled?: boolean
        logging_level?: string
        route_key: string
        throttling_burst_limit?: number
        throttling_rate_limit?: number
      }>
    }
    aws_ec2_fleet: {
      excess_capacity_termination_policy?: string
      id?: string
      replace_unhealthy_instances?: boolean
      tags?: Record<string, string>
      terminate_instances?: boolean
      terminate_instances_with_expiration?: boolean
      type?: string
      launch_template_config: {
        launch_template_specification: {launch_template_id?: string; launch_template_name?: string; version: string}
        override?: Array<{
          availability_zone?: string
          instance_type?: string
          max_price?: string
          priority?: number
          subnet_id?: string
          weighted_capacity?: number
        }>
      }
      on_demand_options?: {allocation_strategy?: string}
      spot_options?: {
        allocation_strategy?: string
        instance_interruption_behavior?: string
        instance_pools_to_use_count?: number
      }
      target_capacity_specification: {
        default_target_capacity_type: string
        on_demand_target_capacity?: number
        spot_target_capacity?: number
        total_target_capacity: number
      }
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_vpc_dhcp_options: {
      domain_name?: string
      domain_name_servers?: Array<string>
      id?: string
      netbios_name_servers?: Array<string>
      netbios_node_type?: string
      ntp_servers?: Array<string>
      owner_id?: string
      tags?: Record<string, string>
    }
    aws_resourcegroups_group: {
      arn?: string
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      resource_query: {query: string; type?: string}
    }
    aws_api_gateway_deployment: {
      created_date?: string
      description?: string
      execution_arn?: string
      id?: string
      invoke_url?: string
      rest_api_id: string
      stage_description?: string
      stage_name?: string
      triggers?: Record<string, string>
      variables?: Record<string, string>
    }
    aws_db_instance: {
      address?: string
      allocated_storage?: number
      allow_major_version_upgrade?: boolean
      apply_immediately?: boolean
      arn?: string
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      backup_retention_period?: number
      backup_window?: string
      ca_cert_identifier?: string
      character_set_name?: string
      copy_tags_to_snapshot?: boolean
      db_subnet_group_name?: string
      delete_automated_backups?: boolean
      deletion_protection?: boolean
      domain?: string
      domain_iam_role_name?: string
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_version?: string
      final_snapshot_identifier?: string
      hosted_zone_id?: string
      iam_database_authentication_enabled?: boolean
      id?: string
      identifier?: string
      identifier_prefix?: string
      instance_class: string
      iops?: number
      kms_key_id?: string
      license_model?: string
      maintenance_window?: string
      max_allocated_storage?: number
      monitoring_interval?: number
      monitoring_role_arn?: string
      multi_az?: boolean
      name?: string
      option_group_name?: string
      parameter_group_name?: string
      password?: string
      performance_insights_enabled?: boolean
      performance_insights_kms_key_id?: string
      performance_insights_retention_period?: number
      port?: number
      publicly_accessible?: boolean
      replicas?: Array<string>
      replicate_source_db?: string
      resource_id?: string
      security_group_names?: Array<string>
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      status?: string
      storage_encrypted?: boolean
      storage_type?: string
      tags?: Record<string, string>
      timezone?: string
      username?: string
      vpc_security_group_ids?: Array<string>
      s3_import?: {
        bucket_name: string
        bucket_prefix?: string
        ingestion_role: string
        source_engine: string
        source_engine_version: string
      }
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_cloudwatch_log_destination: {arn?: string; id?: string; name: string; role_arn: string; target_arn: string}
    aws_ssm_parameter: {
      allowed_pattern?: string
      arn?: string
      description?: string
      id?: string
      key_id?: string
      name: string
      overwrite?: boolean
      tags?: Record<string, string>
      tier?: string
      type: string
      value: string
      version?: number
    }
    aws_appautoscaling_policy: {
      adjustment_type?: string
      arn?: string
      cooldown?: number
      id?: string
      metric_aggregation_type?: string
      min_adjustment_magnitude?: number
      name: string
      policy_type?: string
      resource_id: string
      scalable_dimension: string
      service_namespace: string
      step_adjustment?: Array<{
        metric_interval_lower_bound?: string
        metric_interval_upper_bound?: string
        scaling_adjustment: number
      }>
      step_scaling_policy_configuration?: {
        adjustment_type?: string
        cooldown?: number
        metric_aggregation_type?: string
        min_adjustment_magnitude?: number
        step_adjustment?: Array<{
          metric_interval_lower_bound?: string
          metric_interval_upper_bound?: string
          scaling_adjustment: number
        }>
      }
      target_tracking_scaling_policy_configuration?: {
        disable_scale_in?: boolean
        scale_in_cooldown?: number
        scale_out_cooldown?: number
        target_value: number
        customized_metric_specification?: {
          metric_name: string
          namespace: string
          statistic: string
          unit?: string
          dimensions?: Array<{name: string; value: string}>
        }
        predefined_metric_specification?: {predefined_metric_type: string; resource_label?: string}
      }
    }
    aws_neptune_event_subscription: {
      arn?: string
      customer_aws_id?: string
      enabled?: boolean
      event_categories?: Array<string>
      id?: string
      name?: string
      name_prefix?: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_ebs_default_kms_key: {id?: string; key_arn: string}
    aws_workspaces_ip_group: {
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      rules?: Array<{description?: string; source: string}>
    }
    aws_ses_domain_identity_verification: {arn?: string; domain: string; id?: string; timeouts?: {create?: string}}
    aws_opsworks_haproxy_layer: {
      arn?: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      healthcheck_method?: string
      healthcheck_url?: string
      id?: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      stats_enabled?: boolean
      stats_password: string
      stats_url?: string
      stats_user?: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
      ebs_volume?: Array<{
        encrypted?: boolean
        iops?: number
        mount_point: string
        number_of_disks: number
        raid_level?: string
        size: number
        type?: string
      }>
    }
    aws_glacier_vault: {
      access_policy?: string
      arn?: string
      id?: string
      location?: string
      name: string
      tags?: Record<string, string>
      notification?: Array<{events: Array<string>; sns_topic: string}>
    }
    aws_appautoscaling_scheduled_action: {
      arn?: string
      end_time?: string
      id?: string
      name: string
      resource_id: string
      scalable_dimension?: string
      schedule?: string
      service_namespace: string
      start_time?: string
      scalable_target_action?: {max_capacity?: number; min_capacity?: number}
    }
    aws_neptune_cluster: {
      apply_immediately?: boolean
      arn?: string
      availability_zones?: Array<string>
      backup_retention_period?: number
      cluster_identifier?: string
      cluster_identifier_prefix?: string
      cluster_members?: Array<string>
      cluster_resource_id?: string
      deletion_protection?: boolean
      enable_cloudwatch_logs_exports?: Array<string>
      endpoint?: string
      engine?: string
      engine_version?: string
      final_snapshot_identifier?: string
      hosted_zone_id?: string
      iam_database_authentication_enabled?: boolean
      iam_roles?: Array<string>
      id?: string
      kms_key_arn?: string
      neptune_cluster_parameter_group_name?: string
      neptune_subnet_group_name?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      reader_endpoint?: string
      replication_source_identifier?: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids?: Array<string>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_globalaccelerator_listener: {
      accelerator_arn: string
      client_affinity?: string
      id?: string
      protocol: string
      port_range: Array<{from_port?: number; to_port?: number}>
    }
    aws_dx_gateway_association_proposal: {
      allowed_prefixes?: Array<string>
      associated_gateway_id?: string
      associated_gateway_owner_account_id?: string
      associated_gateway_type?: string
      dx_gateway_id: string
      dx_gateway_owner_account_id: string
      id?: string
      vpn_gateway_id?: string
    }
    aws_waf_geo_match_set: {
      arn?: string
      id?: string
      name: string
      geo_match_constraint?: Array<{type: string; value: string}>
    }
    aws_cloudwatch_event_permission: {
      action?: string
      id?: string
      principal: string
      statement_id: string
      condition?: {key: string; type: string; value: string}
    }
    aws_dax_parameter_group: {
      description?: string
      id?: string
      name: string
      parameters?: Array<{name: string; value: string}>
    }
    aws_devicefarm_project: {arn?: string; id?: string; name: string}
    aws_api_gateway_resource: {id?: string; parent_id: string; path?: string; path_part: string; rest_api_id: string}
    aws_glue_security_configuration: {
      id?: string
      name: string
      encryption_configuration: {
        cloudwatch_encryption: {cloudwatch_encryption_mode?: string; kms_key_arn?: string}
        job_bookmarks_encryption: {job_bookmarks_encryption_mode?: string; kms_key_arn?: string}
        s3_encryption: {kms_key_arn?: string; s3_encryption_mode?: string}
      }
    }
    aws_iam_user_ssh_key: {
      encoding: string
      fingerprint?: string
      id?: string
      public_key: string
      ssh_public_key_id?: string
      status?: string
      username: string
    }
    aws_db_instance_role_association: {
      db_instance_identifier: string
      feature_name: string
      id?: string
      role_arn: string
    }
    aws_api_gateway_model: {
      content_type: string
      description?: string
      id?: string
      name: string
      rest_api_id: string
      schema?: string
    }
    aws_storagegateway_working_storage: {disk_id: string; gateway_arn: string; id?: string}
    aws_codepipeline_webhook: {
      authentication: string
      id?: string
      name: string
      tags?: Record<string, string>
      target_action: string
      target_pipeline: string
      url?: string
      authentication_configuration?: {allowed_ip_range?: string; secret_token?: string}
      filter: Array<{json_path: string; match_equals: string}>
    }
    aws_wafregional_regex_pattern_set: {id?: string; name: string; regex_pattern_strings?: Array<string>}
    aws_ami_copy: {
      architecture?: string
      description?: string
      ena_support?: boolean
      encrypted?: boolean
      id?: string
      image_location?: string
      kernel_id?: string
      kms_key_id?: string
      manage_ebs_snapshots?: boolean
      name: string
      ramdisk_id?: string
      root_device_name?: string
      root_snapshot_id?: string
      source_ami_id: string
      source_ami_region: string
      sriov_net_support?: string
      tags?: Record<string, string>
      virtualization_type?: string
      ebs_block_device?: Array<{
        delete_on_termination?: boolean
        device_name?: string
        encrypted?: boolean
        iops?: number
        snapshot_id?: string
        volume_size?: number
        volume_type?: string
      }>
      ephemeral_block_device?: Array<{device_name?: string; virtual_name?: string}>
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_rds_cluster_instance: {
      apply_immediately?: boolean
      arn?: string
      auto_minor_version_upgrade?: boolean
      availability_zone?: string
      ca_cert_identifier?: string
      cluster_identifier: string
      copy_tags_to_snapshot?: boolean
      db_parameter_group_name?: string
      db_subnet_group_name?: string
      dbi_resource_id?: string
      endpoint?: string
      engine?: string
      engine_version?: string
      id?: string
      identifier?: string
      identifier_prefix?: string
      instance_class: string
      kms_key_id?: string
      monitoring_interval?: number
      monitoring_role_arn?: string
      performance_insights_enabled?: boolean
      performance_insights_kms_key_id?: string
      port?: number
      preferred_backup_window?: string
      preferred_maintenance_window?: string
      promotion_tier?: number
      publicly_accessible?: boolean
      storage_encrypted?: boolean
      tags?: Record<string, string>
      writer?: boolean
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_dx_connection_association: {connection_id: string; id?: string; lag_id: string}
    aws_iam_account_alias: {account_alias: string; id?: string}
    aws_wafv2_ip_set: {
      addresses?: Array<string>
      arn?: string
      description?: string
      id?: string
      ip_address_version: string
      lock_token?: string
      name: string
      scope: string
      tags?: Record<string, string>
    }
    aws_glue_catalog_database: {
      catalog_id?: string
      description?: string
      id?: string
      location_uri?: string
      name: string
      parameters?: Record<string, string>
    }
    aws_config_configuration_recorder: {
      id?: string
      name?: string
      role_arn: string
      recording_group?: {
        all_supported?: boolean
        include_global_resource_types?: boolean
        resource_types?: Array<string>
      }
    }
    aws_apigatewayv2_route_response: {
      api_id: string
      id?: string
      model_selection_expression?: string
      response_models?: Record<string, string>
      route_id: string
      route_response_key: string
    }
    aws_secretsmanager_secret: {
      arn?: string
      description?: string
      id?: string
      kms_key_id?: string
      name?: string
      name_prefix?: string
      policy?: string
      recovery_window_in_days?: number
      rotation_enabled?: boolean
      rotation_lambda_arn?: string
      tags?: Record<string, string>
      rotation_rules?: {automatically_after_days: number}
    }
    aws_config_configuration_aggregator: {
      arn?: string
      id?: string
      name: string
      tags?: Record<string, string>
      account_aggregation_source?: {account_ids: Array<string>; all_regions?: boolean; regions?: Array<string>}
      organization_aggregation_source?: {all_regions?: boolean; regions?: Array<string>; role_arn: string}
    }
    aws_lb_listener_certificate: {certificate_arn: string; id?: string; listener_arn: string}
    aws_wafregional_sql_injection_match_set: {
      id?: string
      name: string
      sql_injection_match_tuple?: Array<{text_transformation: string; field_to_match: {data?: string; type: string}}>
    }
    aws_glue_connection: {
      arn?: string
      catalog_id?: string
      connection_properties: Record<string, string>
      connection_type?: string
      description?: string
      id?: string
      match_criteria?: Array<string>
      name: string
      physical_connection_requirements?: {
        availability_zone?: string
        security_group_id_list?: Array<string>
        subnet_id?: string
      }
    }
    aws_elasticache_replication_group: {
      apply_immediately?: boolean
      at_rest_encryption_enabled?: boolean
      auth_token?: string
      auto_minor_version_upgrade?: boolean
      automatic_failover_enabled?: boolean
      availability_zones?: Array<string>
      configuration_endpoint_address?: string
      engine?: string
      engine_version?: string
      id?: string
      kms_key_id?: string
      maintenance_window?: string
      member_clusters?: Array<string>
      node_type?: string
      notification_topic_arn?: string
      number_cache_clusters?: number
      parameter_group_name?: string
      port?: number
      primary_endpoint_address?: string
      replication_group_description: string
      replication_group_id: string
      security_group_ids?: Array<string>
      security_group_names?: Array<string>
      snapshot_arns?: Array<string>
      snapshot_name?: string
      snapshot_retention_limit?: number
      snapshot_window?: string
      subnet_group_name?: string
      tags?: Record<string, string>
      transit_encryption_enabled?: boolean
      cluster_mode?: {num_node_groups: number; replicas_per_node_group: number}
      timeouts?: {create?: string; delete?: string; update?: string}
    }
    aws_storagegateway_cached_iscsi_volume: {
      arn?: string
      chap_enabled?: boolean
      gateway_arn: string
      id?: string
      lun_number?: number
      network_interface_id: string
      network_interface_port?: number
      snapshot_id?: string
      source_volume_arn?: string
      tags?: Record<string, string>
      target_arn?: string
      target_name: string
      volume_arn?: string
      volume_id?: string
      volume_size_in_bytes: number
    }
    aws_network_acl: {
      egress?: Array<{
        action: string
        cidr_block: string
        from_port: number
        icmp_code: number
        icmp_type: number
        ipv6_cidr_block: string
        protocol: string
        rule_no: number
        to_port: number
      }>
      id?: string
      ingress?: Array<{
        action: string
        cidr_block: string
        from_port: number
        icmp_code: number
        icmp_type: number
        ipv6_cidr_block: string
        protocol: string
        rule_no: number
        to_port: number
      }>
      owner_id?: string
      subnet_id?: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_db_security_group: {
      arn?: string
      description?: string
      id?: string
      name: string
      tags?: Record<string, string>
      ingress: Array<{
        cidr?: string
        security_group_id?: string
        security_group_name?: string
        security_group_owner_id?: string
      }>
    }
    aws_pinpoint_apns_sandbox_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id?: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_pinpoint_apns_voip_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id?: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_glue_classifier: {
      id?: string
      name: string
      csv_classifier?: {
        allow_single_column?: boolean
        contains_header?: string
        delimiter?: string
        disable_value_trimming?: boolean
        header?: Array<string>
        quote_symbol?: string
      }
      grok_classifier?: {classification: string; custom_patterns?: string; grok_pattern: string}
      json_classifier?: {json_path: string}
      xml_classifier?: {classification: string; row_tag: string}
    }
    aws_load_balancer_backend_server_policy: {
      id?: string
      instance_port: number
      load_balancer_name: string
      policy_names?: Array<string>
    }
    aws_api_gateway_api_key: {
      arn?: string
      created_date?: string
      description?: string
      enabled?: boolean
      id?: string
      last_updated_date?: string
      name: string
      tags?: Record<string, string>
      value?: string
      stage_key?: Array<{rest_api_id: string; stage_name: string}>
    }
    aws_athena_named_query: {
      database: string
      description?: string
      id?: string
      name: string
      query: string
      workgroup?: string
    }
    aws_dax_subnet_group: {description?: string; id?: string; name: string; subnet_ids: Array<string>; vpc_id?: string}
    aws_eip_association: {
      allocation_id?: string
      allow_reassociation?: boolean
      id?: string
      instance_id?: string
      network_interface_id?: string
      private_ip_address?: string
      public_ip?: string
    }
    aws_iam_user_group_membership: {groups: Array<string>; id?: string; user: string}
    aws_wafregional_rule: {
      arn?: string
      id?: string
      metric_name: string
      name: string
      tags?: Record<string, string>
      predicate?: Array<{data_id: string; negated: boolean; type: string}>
    }
    aws_ecr_repository_policy: {id?: string; policy: string; registry_id?: string; repository: string}
    aws_backup_selection: {
      iam_role_arn: string
      id?: string
      name: string
      plan_id: string
      resources?: Array<string>
      selection_tag?: Array<{key: string; type: string; value: string}>
    }
    aws_vpn_gateway_route_propagation: {id?: string; route_table_id: string; vpn_gateway_id: string}
  }
  dataSourceStateSchemas: {
    aws_ebs_snapshot: {
      data_encryption_key_id: string
      description: string
      encrypted: boolean
      id: string
      kms_key_id: string
      most_recent?: boolean
      owner_alias: string
      owner_id: string
      owners?: Array<string>
      restorable_by_user_ids?: Array<string>
      snapshot_id: string
      snapshot_ids?: Array<string>
      state: string
      tags: Record<string, string>
      volume_id: string
      volume_size: number
    }
    aws_vpcs: {id: string; ids: Array<string>; tags: Record<string, string>}
    aws_route53_delegation_set: {caller_reference: string; id: string; name_servers: Array<string>}
    aws_route53_resolver_rules: {
      id: string
      owner_id?: string
      resolver_endpoint_id?: string
      resolver_rule_ids: Array<string>
      rule_type?: string
      share_status?: string
    }
    aws_organizations_organizational_units: {
      children: Array<{arn: string; id: string; name: string}>
      id: string
      parent_id: string
    }
    aws_ssm_parameter: {
      arn: string
      id: string
      name: string
      type: string
      value: string
      version: number
      with_decryption?: boolean
    }
    aws_cloudformation_export: {exporting_stack_id: string; id: string; name: string; value: string}
    aws_db_event_categories: {event_categories: Array<string>; id: string; source_type?: string}
    aws_ebs_volume: {
      arn: string
      availability_zone: string
      encrypted: boolean
      id: string
      iops: number
      kms_key_id: string
      most_recent?: boolean
      multi_attach_enabled: boolean
      outpost_arn: string
      size: number
      snapshot_id: string
      tags: Record<string, string>
      volume_id: string
      volume_type: string
    }
    aws_alb_listener: {
      arn: string
      certificate_arn: string
      default_action: Array<{
        authenticate_cognito: Array<{
          authentication_request_extra_params: Record<string, string>
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }>
        authenticate_oidc: Array<{
          authentication_request_extra_params: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          token_endpoint: string
          user_info_endpoint: string
        }>
        fixed_response: Array<{content_type: string; message_body: string; status_code: string}>
        order: number
        redirect: Array<{
          host: string
          path: string
          port: string
          protocol: string
          query: string
          status_code: string
        }>
        target_group_arn: string
        type: string
      }>
      id: string
      load_balancer_arn: string
      port: number
      protocol: string
      ssl_policy: string
    }
    aws_route: {
      destination_cidr_block: string
      destination_ipv6_cidr_block: string
      egress_only_gateway_id: string
      gateway_id: string
      id: string
      instance_id: string
      nat_gateway_id: string
      network_interface_id: string
      route_table_id: string
      transit_gateway_id: string
      vpc_peering_connection_id: string
    }
    aws_vpc_peering_connection: {
      accepter: Record<string, boolean>
      cidr_block: string
      id: string
      owner_id: string
      peer_cidr_block: string
      peer_owner_id: string
      peer_region: string
      peer_vpc_id: string
      region: string
      requester: Record<string, boolean>
      status: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_batch_job_queue: {
      arn: string
      compute_environment_order: Array<{compute_environment: string; order: number}>
      id: string
      name: string
      priority: number
      state: string
      status: string
      status_reason: string
    }
    aws_servicequotas_service: {id: string; service_code: string; service_name: string}
    aws_kinesis_stream: {
      arn: string
      closed_shards: Array<string>
      creation_timestamp: number
      id: string
      name: string
      open_shards: Array<string>
      retention_period: number
      shard_level_metrics: Array<string>
      status: string
      tags: Record<string, string>
    }
    aws_pricing_product: {id: string; result: string; service_code: string}
    aws_rds_cluster: {
      arn: string
      availability_zones: Array<string>
      backtrack_window: number
      backup_retention_period: number
      cluster_identifier: string
      cluster_members: Array<string>
      cluster_resource_id: string
      database_name: string
      db_cluster_parameter_group_name: string
      db_subnet_group_name: string
      enabled_cloudwatch_logs_exports: Array<string>
      endpoint: string
      engine: string
      engine_version: string
      final_snapshot_identifier: string
      hosted_zone_id: string
      iam_database_authentication_enabled: boolean
      iam_roles: Array<string>
      id: string
      kms_key_id: string
      master_username: string
      port: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      reader_endpoint: string
      replication_source_identifier: string
      storage_encrypted: boolean
      tags: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_ec2_transit_gateway_dx_gateway_attachment: {
      dx_gateway_id?: string
      id: string
      tags: Record<string, string>
      transit_gateway_id?: string
    }
    aws_cloudfront_distribution: {
      arn: string
      domain_name: string
      enabled: boolean
      etag: string
      hosted_zone_id: string
      id: string
      in_progress_validation_batches: number
      last_modified_time: string
      status: string
      tags?: Record<string, string>
    }
    aws_ec2_instance_type_offering: {
      id: string
      instance_type: string
      location_type?: string
      preferred_instance_types?: Array<string>
    }
    aws_ec2_local_gateway: {
      id: string
      outpost_arn: string
      owner_id: string
      state: string
      tags: Record<string, string>
    }
    aws_elb_hosted_zone_id: {id: string; region?: string}
    aws_ec2_transit_gateway_vpc_attachment: {
      dns_support: string
      id?: string
      ipv6_support: string
      subnet_ids: Array<string>
      tags: Record<string, string>
      transit_gateway_id: string
      vpc_id: string
      vpc_owner_id: string
    }
    aws_ebs_encryption_by_default: {enabled: boolean; id: string}
    aws_vpn_gateway: {
      amazon_side_asn: string
      attached_vpc_id: string
      availability_zone: string
      id: string
      state: string
      tags: Record<string, string>
    }
    aws_subnet_ids: {id: string; ids: Array<string>; tags: Record<string, string>; vpc_id: string}
    aws_db_instance: {
      address: string
      allocated_storage: number
      auto_minor_version_upgrade: boolean
      availability_zone: string
      backup_retention_period: number
      ca_cert_identifier: string
      db_cluster_identifier: string
      db_instance_arn: string
      db_instance_class: string
      db_instance_identifier: string
      db_instance_port: number
      db_name: string
      db_parameter_groups: Array<string>
      db_security_groups: Array<string>
      db_subnet_group: string
      enabled_cloudwatch_logs_exports: Array<string>
      endpoint: string
      engine: string
      engine_version: string
      hosted_zone_id: string
      id: string
      iops: number
      kms_key_id: string
      license_model: string
      master_username: string
      monitoring_interval: number
      monitoring_role_arn: string
      multi_az: boolean
      option_group_memberships: Array<string>
      port: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      publicly_accessible: boolean
      replicate_source_db: string
      resource_id: string
      storage_encrypted: boolean
      storage_type: string
      tags: Record<string, string>
      timezone: string
      vpc_security_groups: Array<string>
    }
    aws_ec2_transit_gateway_peering_attachment: {
      id?: string
      peer_account_id: string
      peer_region: string
      peer_transit_gateway_id: string
      tags: Record<string, string>
      transit_gateway_id: string
    }
    aws_vpc_dhcp_options: {
      dhcp_options_id: string
      domain_name: string
      domain_name_servers: Array<string>
      id: string
      netbios_name_servers: Array<string>
      netbios_node_type: string
      ntp_servers: Array<string>
      owner_id: string
      tags: Record<string, string>
    }
    aws_lb_target_group: {
      arn: string
      arn_suffix: string
      deregistration_delay: number
      health_check: Array<{
        enabled: boolean
        healthy_threshold: number
        interval: number
        matcher: string
        path: string
        port: string
        protocol: string
        timeout: number
        unhealthy_threshold: number
      }>
      id: string
      lambda_multi_value_headers_enabled: boolean
      load_balancing_algorithm_type: string
      name: string
      port: number
      protocol: string
      proxy_protocol_v2: boolean
      slow_start: number
      stickiness: Array<{cookie_duration: number; enabled: boolean; type: string}>
      tags: Record<string, string>
      target_type: string
      vpc_id: string
    }
    aws_kms_secret: {id: string}
    aws_servicequotas_service_quota: {
      adjustable: boolean
      arn: string
      default_value: number
      global_quota: boolean
      id: string
      quota_code: string
      quota_name: string
      service_code: string
      service_name: string
      value: number
    }
    aws_sfn_activity: {arn: string; creation_date: string; id: string; name: string}
    aws_region: {current: boolean; description: string; endpoint: string; id: string; name: string}
    aws_dynamodb_table: {
      arn: string
      attribute: Array<{name: string; type: string}>
      billing_mode: string
      global_secondary_index: Array<{
        hash_key: string
        name: string
        non_key_attributes: Array<string>
        projection_type: string
        range_key: string
        read_capacity: number
        write_capacity: number
      }>
      hash_key: string
      id: string
      local_secondary_index: Array<{
        name: string
        non_key_attributes: Array<string>
        projection_type: string
        range_key: string
      }>
      name: string
      point_in_time_recovery: Array<{enabled: boolean}>
      range_key: string
      read_capacity: number
      replica: Array<{region_name: string}>
      stream_arn: string
      stream_enabled: boolean
      stream_label: string
      stream_view_type: string
      tags: Record<string, string>
      ttl: Array<{attribute_name: string; enabled: boolean}>
      write_capacity: number
    }
    aws_waf_web_acl: {id: string; name: string}
    aws_ecr_image: {
      id: string
      image_digest: string
      image_pushed_at: number
      image_size_in_bytes: number
      image_tag?: string
      image_tags: Array<string>
      registry_id: string
      repository_name: string
    }
    aws_lambda_invocation: {
      function_name: string
      id: string
      input: string
      qualifier?: string
      result: string
      result_map: Record<string, string>
    }
    aws_ebs_default_kms_key: {id: string; key_arn: string}
    aws_lb: {
      access_logs: Array<{bucket: string; enabled: boolean; prefix: string}>
      arn: string
      arn_suffix: string
      dns_name: string
      drop_invalid_header_fields: boolean
      enable_deletion_protection: boolean
      id: string
      idle_timeout: number
      internal: boolean
      ip_address_type: string
      load_balancer_type: string
      name: string
      security_groups: Array<string>
      subnet_mapping: Array<{allocation_id: string; subnet_id: string}>
      subnets: Array<string>
      tags: Record<string, string>
      vpc_id: string
      zone_id: string
    }
    aws_route_tables: {id: string; ids: Array<string>; tags: Record<string, string>; vpc_id?: string}
    aws_internet_gateway: {
      attachments: Array<{state: string; vpc_id: string}>
      id: string
      internet_gateway_id: string
      owner_id: string
      tags: Record<string, string>
    }
    aws_route53_resolver_rule: {
      arn: string
      domain_name: string
      id: string
      name: string
      owner_id: string
      resolver_endpoint_id: string
      resolver_rule_id: string
      rule_type: string
      share_status: string
      tags: Record<string, string>
    }
    aws_network_interfaces: {id: string; ids: Array<string>; tags: Record<string, string>}
    aws_ami_ids: {
      executable_users?: Array<string>
      id: string
      ids: Array<string>
      name_regex?: string
      owners: Array<string>
      sort_ascending?: boolean
    }
    aws_lambda_layer_version: {
      arn: string
      compatible_runtime?: string
      compatible_runtimes: Array<string>
      created_date: string
      description: string
      id: string
      layer_arn: string
      layer_name: string
      license_info: string
      source_code_hash: string
      source_code_size: number
      version: number
    }
    aws_glue_script: {id: string; language?: string; python_script: string; scala_code: string}
    aws_acmpca_certificate_authority: {
      arn: string
      certificate: string
      certificate_chain: string
      certificate_signing_request: string
      id: string
      not_after: string
      not_before: string
      serial: string
      status: string
      tags: Record<string, string>
      type: string
    }
    aws_cloudwatch_log_group: {
      arn: string
      creation_time: number
      id: string
      kms_key_id: string
      name: string
      retention_in_days: number
      tags: Record<string, string>
    }
    aws_launch_template: {
      arn: string
      block_device_mappings: Array<{
        device_name: string
        ebs: Array<{
          delete_on_termination: string
          encrypted: string
          iops: number
          kms_key_id: string
          snapshot_id: string
          volume_size: number
          volume_type: string
        }>
        no_device: string
        virtual_name: string
      }>
      credit_specification: Array<{cpu_credits: string}>
      default_version: number
      description: string
      disable_api_termination: boolean
      ebs_optimized: string
      elastic_gpu_specifications: Array<{type: string}>
      hibernation_options: Array<{configured: boolean}>
      iam_instance_profile: Array<{arn: string; name: string}>
      id: string
      image_id: string
      instance_initiated_shutdown_behavior: string
      instance_market_options: Array<{
        market_type: string
        spot_options: Array<{
          block_duration_minutes: number
          instance_interruption_behavior: string
          max_price: string
          spot_instance_type: string
          valid_until: string
        }>
      }>
      instance_type: string
      kernel_id: string
      key_name: string
      latest_version: number
      metadata_options: Array<{http_endpoint: string; http_put_response_hop_limit: number; http_tokens: string}>
      monitoring: Array<{enabled: boolean}>
      name?: string
      network_interfaces: Array<{
        associate_public_ip_address: string
        delete_on_termination: boolean
        description: string
        device_index: number
        ipv4_address_count: number
        ipv4_addresses: Array<string>
        ipv6_address_count: number
        ipv6_addresses: Array<string>
        network_interface_id: string
        private_ip_address: string
        security_groups: Array<string>
        subnet_id: string
      }>
      placement: Array<{
        affinity: string
        availability_zone: string
        group_name: string
        host_id: string
        partition_number: number
        spread_domain: string
        tenancy: string
      }>
      ram_disk_id: string
      security_group_names: Array<string>
      tag_specifications: Array<{resource_type: string; tags: Record<string, string>}>
      tags: Record<string, string>
      user_data: string
      vpc_security_group_ids: Array<string>
    }
    aws_iot_endpoint: {endpoint_address: string; endpoint_type?: string; id: string}
    aws_kms_alias: {arn: string; id: string; name: string; target_key_arn: string; target_key_id: string}
    aws_s3_bucket: {
      arn: string
      bucket: string
      bucket_domain_name: string
      bucket_regional_domain_name: string
      hosted_zone_id: string
      id: string
      region: string
      website_domain: string
      website_endpoint: string
    }
    aws_alb_target_group: {
      arn: string
      arn_suffix: string
      deregistration_delay: number
      health_check: Array<{
        enabled: boolean
        healthy_threshold: number
        interval: number
        matcher: string
        path: string
        port: string
        protocol: string
        timeout: number
        unhealthy_threshold: number
      }>
      id: string
      lambda_multi_value_headers_enabled: boolean
      load_balancing_algorithm_type: string
      name: string
      port: number
      protocol: string
      proxy_protocol_v2: boolean
      slow_start: number
      stickiness: Array<{cookie_duration: number; enabled: boolean; type: string}>
      tags: Record<string, string>
      target_type: string
      vpc_id: string
    }
    aws_efs_mount_target: {
      dns_name: string
      file_system_arn: string
      file_system_id: string
      id: string
      ip_address: string
      mount_target_id: string
      network_interface_id: string
      security_groups: Array<string>
      subnet_id: string
    }
    aws_ec2_transit_gateway_route_table: {
      default_association_route_table: boolean
      default_propagation_route_table: boolean
      id?: string
      tags: Record<string, string>
      transit_gateway_id: string
    }
    aws_storagegateway_local_disk: {
      disk_id: string
      disk_node?: string
      disk_path?: string
      gateway_arn: string
      id: string
    }
    aws_cloudtrail_service_account: {arn: string; id: string; region?: string}
    aws_qldb_ledger: {arn: string; deletion_protection: boolean; id: string; name: string}
    aws_lambda_alias: {
      arn: string
      description: string
      function_name: string
      function_version: string
      id: string
      invoke_arn: string
      name: string
    }
    aws_nat_gateway: {
      allocation_id: string
      id: string
      network_interface_id: string
      private_ip: string
      public_ip: string
      state: string
      subnet_id: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_wafv2_regex_pattern_set: {
      arn: string
      description: string
      id: string
      name: string
      regular_expression: Array<{regex_string: string}>
      scope: string
    }
    aws_ec2_local_gateway_route_tables: {id: string; ids: Array<string>; tags: Record<string, string>}
    aws_iam_policy: {arn: string; description: string; id: string; name: string; path: string; policy: string}
    aws_sfn_state_machine: {
      arn: string
      creation_date: string
      definition: string
      id: string
      name: string
      role_arn: string
      status: string
    }
    aws_wafv2_rule_group: {arn: string; description: string; id: string; name: string; scope: string}
    aws_dx_gateway: {amazon_side_asn: string; id: string; name: string; owner_account_id: string}
    aws_iam_server_certificate: {
      arn: string
      certificate_body: string
      certificate_chain: string
      expiration_date: string
      id: string
      latest?: boolean
      name: string
      name_prefix?: string
      path: string
      path_prefix?: string
      upload_date: string
    }
    aws_ebs_snapshot_ids: {
      id: string
      ids: Array<string>
      owners?: Array<string>
      restorable_by_user_ids?: Array<string>
    }
    aws_backup_selection: {
      iam_role_arn: string
      id: string
      name: string
      plan_id: string
      resources: Array<string>
      selection_id: string
    }
    aws_vpc: {
      arn: string
      cidr_block: string
      cidr_block_associations: Array<{association_id: string; cidr_block: string; state: string}>
      default: boolean
      dhcp_options_id: string
      enable_dns_hostnames: boolean
      enable_dns_support: boolean
      id: string
      instance_tenancy: string
      ipv6_association_id: string
      ipv6_cidr_block: string
      main_route_table_id: string
      owner_id: string
      state: string
      tags: Record<string, string>
    }
    aws_vpc_endpoint: {
      cidr_blocks: Array<string>
      dns_entry: Array<{dns_name: string; hosted_zone_id: string}>
      id: string
      network_interface_ids: Array<string>
      owner_id: string
      policy: string
      prefix_list_id: string
      private_dns_enabled: boolean
      requester_managed: boolean
      route_table_ids: Array<string>
      security_group_ids: Array<string>
      service_name: string
      state: string
      subnet_ids: Array<string>
      tags: Record<string, string>
      vpc_endpoint_type: string
      vpc_id: string
    }
    aws_sqs_queue: {arn: string; id: string; name: string; tags: Record<string, string>; url: string}
    aws_wafregional_rate_based_rule: {id: string; name: string}
    aws_waf_rate_based_rule: {id: string; name: string}
    aws_kms_ciphertext: {
      ciphertext_blob: string
      context?: Record<string, string>
      id: string
      key_id: string
      plaintext: string
    }
    aws_elasticache_replication_group: {
      auth_token_enabled: boolean
      automatic_failover_enabled: boolean
      configuration_endpoint_address: string
      id: string
      member_clusters: Array<string>
      node_type: string
      number_cache_clusters: number
      port: number
      primary_endpoint_address: string
      replication_group_description: string
      replication_group_id: string
      snapshot_retention_limit: number
      snapshot_window: string
    }
    aws_s3_bucket_object: {
      body: string
      bucket: string
      cache_control: string
      content_disposition: string
      content_encoding: string
      content_language: string
      content_length: number
      content_type: string
      etag: string
      expiration: string
      expires: string
      id: string
      key: string
      last_modified: string
      metadata: Record<string, string>
      object_lock_legal_hold_status: string
      object_lock_mode: string
      object_lock_retain_until_date: string
      range?: string
      server_side_encryption: string
      sse_kms_key_id: string
      storage_class: string
      tags: Record<string, string>
      version_id: string
      website_redirect_location: string
    }
    aws_kms_key: {
      arn: string
      aws_account_id: string
      creation_date: string
      customer_master_key_spec: string
      deletion_date: string
      description: string
      enabled: boolean
      expiration_model: string
      grant_tokens?: Array<string>
      id: string
      key_id: string
      key_manager: string
      key_state: string
      key_usage: string
      origin: string
      valid_to: string
    }
    aws_msk_cluster: {
      arn: string
      bootstrap_brokers: string
      bootstrap_brokers_tls: string
      cluster_name: string
      id: string
      kafka_version: string
      number_of_broker_nodes: number
      tags: Record<string, string>
      zookeeper_connect_string: string
    }
    aws_cloudhsm_v2_cluster: {
      cluster_certificates: Array<{
        aws_hardware_certificate: string
        cluster_certificate: string
        cluster_csr: string
        hsm_certificate: string
        manufacturer_hardware_certificate: string
      }>
      cluster_id: string
      cluster_state: string
      id: string
      security_group_id: string
      subnet_ids: Array<string>
      vpc_id: string
    }
    aws_workspaces_bundle: {
      bundle_id: string
      compute_type: Array<{name: string}>
      description: string
      id: string
      name: string
      owner: string
      root_storage: Array<{capacity: string}>
      user_storage: Array<{capacity: string}>
    }
    aws_api_gateway_resource: {id: string; parent_id: string; path: string; path_part: string; rest_api_id: string}
    aws_ecs_container_definition: {
      container_name: string
      cpu: number
      disable_networking: boolean
      docker_labels: Record<string, string>
      environment: Record<string, string>
      id: string
      image: string
      image_digest: string
      memory: number
      memory_reservation: number
      task_definition: string
    }
    aws_autoscaling_groups: {arns: Array<string>; id: string; names: Array<string>}
    aws_s3_bucket_objects: {
      bucket: string
      common_prefixes: Array<string>
      delimiter?: string
      encoding_type?: string
      fetch_owner?: boolean
      id: string
      keys: Array<string>
      max_keys?: number
      owners: Array<string>
      prefix?: string
      start_after?: string
    }
    aws_iam_instance_profile: {
      arn: string
      create_date: string
      id: string
      name: string
      path: string
      role_arn: string
      role_id: string
      role_name: string
    }
    aws_lb_listener: {
      arn: string
      certificate_arn: string
      default_action: Array<{
        authenticate_cognito: Array<{
          authentication_request_extra_params: Record<string, string>
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          user_pool_arn: string
          user_pool_client_id: string
          user_pool_domain: string
        }>
        authenticate_oidc: Array<{
          authentication_request_extra_params: Record<string, string>
          authorization_endpoint: string
          client_id: string
          client_secret: string
          issuer: string
          on_unauthenticated_request: string
          scope: string
          session_cookie_name: string
          session_timeout: number
          token_endpoint: string
          user_info_endpoint: string
        }>
        fixed_response: Array<{content_type: string; message_body: string; status_code: string}>
        order: number
        redirect: Array<{
          host: string
          path: string
          port: string
          protocol: string
          query: string
          status_code: string
        }>
        target_group_arn: string
        type: string
      }>
      id: string
      load_balancer_arn: string
      port: number
      protocol: string
      ssl_policy: string
    }
    aws_ec2_coip_pool: {
      id: string
      local_gateway_route_table_id: string
      pool_cidrs: Array<string>
      pool_id: string
      tags: Record<string, string>
    }
    aws_vpc_endpoint_service: {
      acceptance_required: boolean
      availability_zones: Array<string>
      base_endpoint_dns_names: Array<string>
      id: string
      manages_vpc_endpoints: boolean
      owner: string
      private_dns_name: string
      service?: string
      service_id: string
      service_name: string
      service_type: string
      tags: Record<string, string>
      vpc_endpoint_policy_supported: boolean
    }
    aws_ec2_transit_gateway_vpn_attachment: {
      id: string
      tags: Record<string, string>
      transit_gateway_id?: string
      vpn_connection_id?: string
    }
    aws_arn: {
      account: string
      arn: string
      id: string
      partition: string
      region: string
      resource: string
      service: string
    }
    aws_transfer_server: {
      arn: string
      endpoint: string
      id: string
      identity_provider_type: string
      invocation_role: string
      logging_role: string
      server_id: string
      url: string
    }
    aws_elasticache_cluster: {
      arn: string
      availability_zone: string
      cache_nodes: Array<{address: string; availability_zone: string; id: string; port: number}>
      cluster_address: string
      cluster_id: string
      configuration_endpoint: string
      engine: string
      engine_version: string
      id: string
      maintenance_window: string
      node_type: string
      notification_topic_arn: string
      num_cache_nodes: number
      parameter_group_name: string
      port: number
      replication_group_id: string
      security_group_ids: Array<string>
      security_group_names: Array<string>
      snapshot_retention_limit: number
      snapshot_window: string
      subnet_group_name: string
      tags: Record<string, string>
    }
    aws_secretsmanager_secret: {
      arn: string
      description: string
      id: string
      kms_key_id: string
      name: string
      policy: string
      rotation_enabled: boolean
      rotation_lambda_arn: string
      rotation_rules: Array<{automatically_after_days: number}>
      tags: Record<string, string>
    }
    aws_api_gateway_vpc_link: {
      description: string
      id: string
      name: string
      status: string
      status_message: string
      tags: Record<string, string>
      target_arns: Array<string>
    }
    aws_subnet: {
      arn: string
      assign_ipv6_address_on_creation: boolean
      availability_zone: string
      availability_zone_id: string
      cidr_block: string
      default_for_az: boolean
      id: string
      ipv6_cidr_block: string
      ipv6_cidr_block_association_id: string
      map_public_ip_on_launch: boolean
      outpost_arn: string
      owner_id: string
      state: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_elastic_beanstalk_solution_stack: {id: string; most_recent?: boolean; name: string; name_regex: string}
    aws_ec2_transit_gateway: {
      amazon_side_asn: number
      arn: string
      association_default_route_table_id: string
      auto_accept_shared_attachments: string
      default_route_table_association: string
      default_route_table_propagation: string
      description: string
      dns_support: string
      id?: string
      owner_id: string
      propagation_default_route_table_id: string
      tags: Record<string, string>
      vpn_ecmp_support: string
    }
    aws_ecs_task_definition: {
      family: string
      id: string
      network_mode: string
      revision: number
      status: string
      task_definition: string
      task_role_arn: string
    }
    aws_elastic_beanstalk_hosted_zone: {id: string; region?: string}
    aws_autoscaling_group: {
      arn: string
      availability_zones: Array<string>
      default_cooldown: number
      desired_capacity: number
      health_check_grace_period: number
      health_check_type: string
      id: string
      launch_configuration: string
      load_balancers: Array<string>
      max_size: number
      min_size: number
      name: string
      new_instances_protected_from_scale_in: boolean
      placement_group: string
      service_linked_role_arn: string
      status: string
      target_group_arns: Array<string>
      termination_policies: Array<string>
      vpc_zone_identifier: string
    }
    aws_ram_resource_share: {
      arn: string
      id: string
      name: string
      owning_account_id: string
      resource_owner: string
      status: string
      tags: Record<string, string>
    }
    aws_lambda_function: {
      arn: string
      dead_letter_config: Array<{target_arn: string}>
      description: string
      environment: Array<{variables: Record<string, string>}>
      function_name: string
      handler: string
      id: string
      invoke_arn: string
      kms_key_arn: string
      last_modified: string
      layers: Array<string>
      memory_size: number
      qualified_arn: string
      qualifier?: string
      reserved_concurrent_executions: number
      role: string
      runtime: string
      source_code_hash: string
      source_code_size: number
      tags: Record<string, string>
      timeout: number
      tracing_config: Array<{mode: string}>
      version: string
      vpc_config: Array<{security_group_ids: Array<string>; subnet_ids: Array<string>; vpc_id: string}>
    }
    aws_ssm_patch_baseline: {
      default_baseline?: boolean
      description: string
      id: string
      name: string
      name_prefix?: string
      operating_system?: string
      owner: string
    }
    aws_kms_secrets: {id: string; plaintext: Record<string, string>}
    aws_ec2_coip_pools: {id: string; pool_ids: Array<string>; tags: Record<string, string>}
    aws_ecs_service: {
      arn: string
      cluster_arn: string
      desired_count: number
      id: string
      launch_type: string
      scheduling_strategy: string
      service_name: string
      task_definition: string
    }
    aws_network_acls: {id: string; ids: Array<string>; tags: Record<string, string>; vpc_id?: string}
    aws_waf_rule: {id: string; name: string}
    aws_wafregional_web_acl: {id: string; name: string}
    aws_db_cluster_snapshot: {
      allocated_storage: number
      availability_zones: Array<string>
      db_cluster_identifier?: string
      db_cluster_snapshot_arn: string
      db_cluster_snapshot_identifier?: string
      engine: string
      engine_version: string
      id: string
      include_public?: boolean
      include_shared?: boolean
      kms_key_id: string
      license_model: string
      most_recent?: boolean
      port: number
      snapshot_create_time: string
      snapshot_type?: string
      source_db_cluster_snapshot_arn: string
      status: string
      storage_encrypted: boolean
      tags: Record<string, string>
      vpc_id: string
    }
    aws_cognito_user_pools: {arns: Array<string>; id: string; ids: Array<string>; name: string}
    aws_api_gateway_rest_api: {
      api_key_source: string
      arn: string
      binary_media_types: Array<string>
      description: string
      endpoint_configuration: Array<{types: Array<string>; vpc_endpoint_ids: Array<string>}>
      execution_arn: string
      id: string
      minimum_compression_size: number
      name: string
      policy: string
      root_resource_id: string
      tags: Record<string, string>
    }
    aws_eip: {
      association_id: string
      customer_owned_ip: string
      customer_owned_ipv4_pool: string
      domain: string
      id: string
      instance_id: string
      network_interface_id: string
      network_interface_owner_id: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      public_ipv4_pool: string
      tags: Record<string, string>
    }
    aws_backup_vault: {
      arn: string
      id: string
      kms_key_arn: string
      name: string
      recovery_points: number
      tags: Record<string, string>
    }
    aws_alb: {
      access_logs: Array<{bucket: string; enabled: boolean; prefix: string}>
      arn: string
      arn_suffix: string
      dns_name: string
      drop_invalid_header_fields: boolean
      enable_deletion_protection: boolean
      id: string
      idle_timeout: number
      internal: boolean
      ip_address_type: string
      load_balancer_type: string
      name: string
      security_groups: Array<string>
      subnet_mapping: Array<{allocation_id: string; subnet_id: string}>
      subnets: Array<string>
      tags: Record<string, string>
      vpc_id: string
      zone_id: string
    }
    aws_wafv2_ip_set: {
      addresses: Array<string>
      arn: string
      description: string
      id: string
      ip_address_version: string
      name: string
      scope: string
    }
    aws_availability_zones: {
      all_availability_zones?: boolean
      blacklisted_names?: Array<string>
      blacklisted_zone_ids?: Array<string>
      group_names?: Array<string>
      id: string
      names: Array<string>
      state?: string
      zone_ids: Array<string>
    }
    aws_billing_service_account: {arn: string; id: string}
    aws_launch_configuration: {
      arn: string
      associate_public_ip_address: boolean
      ebs_block_device: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        snapshot_id: string
        volume_size: number
        volume_type: string
      }>
      ebs_optimized: boolean
      enable_monitoring: boolean
      ephemeral_block_device: Array<{device_name: string; virtual_name: string}>
      iam_instance_profile: string
      id: string
      image_id: string
      instance_type: string
      key_name: string
      name: string
      placement_tenancy: string
      root_block_device: Array<{
        delete_on_termination: boolean
        encrypted: boolean
        iops: number
        volume_size: number
        volume_type: string
      }>
      security_groups: Array<string>
      spot_price: string
      user_data: string
      vpc_classic_link_id: string
      vpc_classic_link_security_groups: Array<string>
    }
    aws_security_group: {
      arn: string
      description: string
      id: string
      name: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_canonical_user_id: {display_name: string; id: string}
    aws_iam_role: {
      arn: string
      assume_role_policy: string
      assume_role_policy_document: string
      create_date: string
      description: string
      id: string
      max_session_duration: number
      name: string
      path: string
      permissions_boundary: string
      role_id: string
      role_name?: string
      tags: Record<string, string>
      unique_id: string
    }
    aws_instance: {
      ami: string
      arn: string
      associate_public_ip_address: boolean
      availability_zone: string
      credit_specification: Array<{cpu_credits: string}>
      disable_api_termination: boolean
      ebs_block_device: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        kms_key_id: string
        snapshot_id: string
        volume_id: string
        volume_size: number
        volume_type: string
      }>
      ebs_optimized: boolean
      ephemeral_block_device: Array<{device_name: string; no_device: boolean; virtual_name: string}>
      get_password_data?: boolean
      get_user_data?: boolean
      host_id: string
      iam_instance_profile: string
      id: string
      instance_id?: string
      instance_state: string
      instance_tags: Record<string, string>
      instance_type: string
      key_name: string
      metadata_options: Array<{http_endpoint: string; http_put_response_hop_limit: number; http_tokens: string}>
      monitoring: boolean
      network_interface_id: string
      outpost_arn: string
      password_data: string
      placement_group: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      root_block_device: Array<{
        delete_on_termination: boolean
        device_name: string
        encrypted: boolean
        iops: number
        kms_key_id: string
        volume_id: string
        volume_size: number
        volume_type: string
      }>
      security_groups: Array<string>
      source_dest_check: boolean
      subnet_id: string
      tags: Record<string, string>
      tenancy: string
      user_data: string
      user_data_base64: string
      vpc_security_group_ids: Array<string>
    }
    aws_ecs_cluster: {
      arn: string
      cluster_name: string
      id: string
      pending_tasks_count: number
      registered_container_instances_count: number
      running_tasks_count: number
      setting: Array<{name: string; value: string}>
      status: string
    }
    aws_elb: {
      access_logs: Array<{bucket: string; bucket_prefix: string; enabled: boolean; interval: number}>
      arn: string
      availability_zones: Array<string>
      connection_draining: boolean
      connection_draining_timeout: number
      cross_zone_load_balancing: boolean
      dns_name: string
      health_check: Array<{
        healthy_threshold: number
        interval: number
        target: string
        timeout: number
        unhealthy_threshold: number
      }>
      id: string
      idle_timeout: number
      instances: Array<string>
      internal: boolean
      listener: Array<{
        instance_port: number
        instance_protocol: string
        lb_port: number
        lb_protocol: string
        ssl_certificate_id: string
      }>
      name: string
      security_groups: Array<string>
      source_security_group: string
      source_security_group_id: string
      subnets: Array<string>
      tags: Record<string, string>
      zone_id: string
    }
    aws_route53_zone: {
      caller_reference: string
      comment: string
      id: string
      linked_service_description: string
      linked_service_principal: string
      name: string
      name_servers: Array<string>
      private_zone?: boolean
      resource_record_set_count: number
      tags: Record<string, string>
      vpc_id: string
      zone_id: string
    }
    aws_db_snapshot: {
      allocated_storage: number
      availability_zone: string
      db_instance_identifier?: string
      db_snapshot_arn: string
      db_snapshot_identifier?: string
      encrypted: boolean
      engine: string
      engine_version: string
      id: string
      include_public?: boolean
      include_shared?: boolean
      iops: number
      kms_key_id: string
      license_model: string
      most_recent?: boolean
      option_group_name: string
      port: number
      snapshot_create_time: string
      snapshot_type?: string
      source_db_snapshot_identifier: string
      source_region: string
      status: string
      storage_type: string
      vpc_id: string
    }
    aws_wafregional_rule: {id: string; name: string}
    aws_iam_group: {
      arn: string
      group_id: string
      group_name: string
      id: string
      path: string
      users: Array<{arn: string; path: string; user_id: string; user_name: string}>
    }
    aws_organizations_organization: {
      accounts: Array<{arn: string; email: string; id: string; name: string; status: string}>
      arn: string
      aws_service_access_principals: Array<string>
      enabled_policy_types: Array<string>
      feature_set: string
      id: string
      master_account_arn: string
      master_account_email: string
      master_account_id: string
      non_master_accounts: Array<{arn: string; email: string; id: string; name: string; status: string}>
      roots: Array<{arn: string; id: string; name: string; policy_types: Array<{status: string; type: string}>}>
    }
    aws_ssm_document: {
      arn: string
      content: string
      document_format?: string
      document_type: string
      document_version?: string
      id: string
      name: string
    }
    aws_mq_broker: {
      arn: string
      auto_minor_version_upgrade: boolean
      broker_id: string
      broker_name: string
      configuration: Array<{id: string; revision: number}>
      deployment_mode: string
      encryption_options: Array<{kms_key_id: string; use_aws_owned_key: boolean}>
      engine_type: string
      engine_version: string
      host_instance_type: string
      id: string
      instances: Array<{console_url: string; endpoints: Array<string>; ip_address: string}>
      maintenance_window_start_time: Array<{day_of_week: string; time_of_day: string; time_zone: string}>
      publicly_accessible: boolean
      security_groups: Array<string>
      subnet_ids: Array<string>
      tags: Record<string, string>
      user: Array<{console_access: boolean; groups: Array<string>; username: string}>
    }
    aws_prefix_list: {cidr_blocks: Array<string>; id: string; name: string; prefix_list_id?: string}
    aws_partition: {dns_suffix: string; id: string; partition: string}
    aws_route_table: {
      associations: Array<{
        gateway_id: string
        main: boolean
        route_table_association_id: string
        route_table_id: string
        subnet_id: string
      }>
      gateway_id: string
      id: string
      owner_id: string
      route_table_id: string
      routes: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      subnet_id: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_regions: {all_regions?: boolean; id: string; names: Array<string>}
    aws_caller_identity: {account_id: string; arn: string; id: string; user_id: string}
    aws_network_interface: {
      association: Array<{
        allocation_id: string
        association_id: string
        ip_owner_id: string
        public_dns_name: string
        public_ip: string
      }>
      attachment: Array<{attachment_id: string; device_index: number; instance_id: string; instance_owner_id: string}>
      availability_zone: string
      description: string
      id: string
      interface_type: string
      ipv6_addresses: Array<string>
      mac_address: string
      outpost_arn: string
      owner_id: string
      private_dns_name: string
      private_ip: string
      private_ips: Array<string>
      requester_id: string
      security_groups: Array<string>
      subnet_id: string
      tags: Record<string, string>
      vpc_id: string
    }
    aws_ec2_local_gateways: {id: string; ids: Array<string>; tags: Record<string, string>}
    aws_instances: {
      id: string
      ids: Array<string>
      instance_state_names?: Array<string>
      instance_tags: Record<string, string>
      private_ips: Array<string>
      public_ips: Array<string>
    }
    aws_ami: {
      architecture: string
      block_device_mappings: Array<{
        device_name: string
        ebs: Record<string, string>
        no_device: string
        virtual_name: string
      }>
      creation_date: string
      description: string
      executable_users?: Array<string>
      hypervisor: string
      id: string
      image_id: string
      image_location: string
      image_owner_alias: string
      image_type: string
      kernel_id: string
      most_recent?: boolean
      name: string
      name_regex?: string
      owner_id: string
      owners: Array<string>
      platform: string
      product_codes: Array<{product_code_id: string; product_code_type: string}>
      public: boolean
      ramdisk_id: string
      root_device_name: string
      root_device_type: string
      root_snapshot_id: string
      sriov_net_support: string
      state: string
      state_reason: Record<string, string>
      tags: Record<string, string>
      virtualization_type: string
    }
    aws_sns_topic: {arn: string; id: string; name: string}
    aws_ec2_local_gateway_route_table: {
      id: string
      local_gateway_id: string
      local_gateway_route_table_id: string
      outpost_arn: string
      state: string
      tags: Record<string, string>
    }
    aws_ip_ranges: {
      cidr_blocks: Array<string>
      create_date: string
      id: string
      ipv6_cidr_blocks: Array<string>
      regions?: Array<string>
      services: Array<string>
      sync_token: number
      url?: string
    }
    aws_secretsmanager_secret_version: {
      arn: string
      id: string
      secret_binary: string
      secret_id: string
      secret_string: string
      version_id: string
      version_stage?: string
      version_stages: Array<string>
    }
    aws_ecr_repository: {
      arn: string
      id: string
      name: string
      registry_id: string
      repository_url: string
      tags: Record<string, string>
    }
    aws_directory_service_directory: {
      access_url: string
      alias: string
      connect_settings: Array<{
        availability_zones: Array<string>
        connect_ips: Array<string>
        customer_dns_ips: Array<string>
        customer_username: string
        subnet_ids: Array<string>
        vpc_id: string
      }>
      description: string
      directory_id: string
      dns_ip_addresses: Array<string>
      edition: string
      enable_sso: boolean
      id: string
      name: string
      security_group_id: string
      short_name: string
      size: string
      tags?: Record<string, string>
      type: string
      vpc_settings: Array<{availability_zones: Array<string>; subnet_ids: Array<string>; vpc_id: string}>
    }
    aws_ec2_instance_type_offerings: {id: string; instance_types: Array<string>; location_type?: string}
    aws_redshift_cluster: {
      allow_version_upgrade: boolean
      automated_snapshot_retention_period: number
      availability_zone: string
      bucket_name: string
      cluster_identifier: string
      cluster_parameter_group_name: string
      cluster_public_key: string
      cluster_revision_number: string
      cluster_security_groups: Array<string>
      cluster_subnet_group_name: string
      cluster_type: string
      cluster_version: string
      database_name: string
      elastic_ip: string
      enable_logging: boolean
      encrypted: boolean
      endpoint: string
      enhanced_vpc_routing: boolean
      iam_roles: Array<string>
      id: string
      kms_key_id: string
      master_username: string
      node_type: string
      number_of_nodes: number
      port: number
      preferred_maintenance_window: string
      publicly_accessible: boolean
      s3_key_prefix: string
      tags?: Record<string, string>
      vpc_id: string
      vpc_security_group_ids: Array<string>
    }
    aws_waf_ipset: {id: string; name: string}
    aws_customer_gateway: {bgp_asn: number; id?: string; ip_address: string; tags: Record<string, string>; type: string}
    aws_elasticsearch_domain: {
      access_policies: string
      advanced_options: Record<string, string>
      arn: string
      cluster_config: Array<{
        dedicated_master_count: number
        dedicated_master_enabled: boolean
        dedicated_master_type: string
        instance_count: number
        instance_type: string
        zone_awareness_config: Array<{availability_zone_count: number}>
        zone_awareness_enabled: boolean
      }>
      cognito_options: Array<{enabled: boolean; identity_pool_id: string; role_arn: string; user_pool_id: string}>
      created: boolean
      deleted: boolean
      domain_id: string
      domain_name: string
      ebs_options: Array<{ebs_enabled: boolean; iops: number; volume_size: number; volume_type: string}>
      elasticsearch_version: string
      encryption_at_rest: Array<{enabled: boolean; kms_key_id: string}>
      endpoint: string
      id: string
      kibana_endpoint: string
      log_publishing_options: Array<{cloudwatch_log_group_arn: string; enabled: boolean; log_type: string}>
      node_to_node_encryption: Array<{enabled: boolean}>
      processing: boolean
      snapshot_options: Array<{automated_snapshot_start_hour: number}>
      tags: Record<string, string>
      vpc_options: Array<{
        availability_zones: Array<string>
        security_group_ids: Array<string>
        subnet_ids: Array<string>
        vpc_id: string
      }>
    }
    aws_api_gateway_api_key: {
      created_date: string
      description: string
      enabled: boolean
      id: string
      last_updated_date: string
      name: string
      tags: Record<string, string>
      value: string
    }
    aws_iam_user: {
      arn: string
      id: string
      path: string
      permissions_boundary: string
      user_id: string
      user_name: string
    }
    aws_eks_cluster_auth: {id: string; name: string; token: string}
    aws_iam_policy_document: {
      id: string
      json: string
      override_json?: string
      policy_id?: string
      source_json?: string
      version?: string
    }
    aws_wafregional_ipset: {id: string; name: string}
    aws_iam_account_alias: {account_alias: string; id: string}
    aws_efs_file_system: {
      arn: string
      creation_token: string
      dns_name: string
      encrypted: boolean
      file_system_id: string
      id: string
      kms_key_id: string
      lifecycle_policy: Array<{transition_to_ia: string}>
      performance_mode: string
      provisioned_throughput_in_mibps: number
      size_in_bytes: number
      tags: Record<string, string>
      throughput_mode: string
    }
    aws_eks_cluster: {
      arn: string
      certificate_authority: Array<{data: string}>
      created_at: string
      enabled_cluster_log_types: Array<string>
      endpoint: string
      id: string
      identity: Array<{oidc: Array<{issuer: string}>}>
      name: string
      platform_version: string
      role_arn: string
      status: string
      tags: Record<string, string>
      version: string
      vpc_config: Array<{
        cluster_security_group_id: string
        endpoint_private_access: boolean
        endpoint_public_access: boolean
        public_access_cidrs: Array<string>
        security_group_ids: Array<string>
        subnet_ids: Array<string>
        vpc_id: string
      }>
    }
    aws_backup_plan: {
      arn: string
      id: string
      name: string
      plan_id: string
      tags: Record<string, string>
      version: string
    }
    aws_cur_report_definition: {
      additional_artifacts: Array<string>
      additional_schema_elements: Array<string>
      compression: string
      format: string
      id: string
      report_name: string
      s3_bucket: string
      s3_prefix: string
      s3_region: string
      time_unit: string
    }
    aws_codecommit_repository: {
      arn: string
      clone_url_http: string
      clone_url_ssh: string
      id: string
      repository_id: string
      repository_name: string
    }
    aws_inspector_rules_packages: {arns: Array<string>; id: string}
    aws_efs_access_point: {
      access_point_id: string
      arn: string
      file_system_arn: string
      file_system_id: string
      id: string
      owner_id: string
      posix_user: Array<{gid: number; secondary_gids: Array<number>; uid: number}>
      root_directory: Array<{
        creation_info: Array<{owner_gid: number; owner_uid: number; permissions: string}>
        path: string
      }>
      tags?: Record<string, string>
    }
    aws_guardduty_detector: {
      finding_publishing_frequency: string
      id?: string
      service_role_arn: string
      status: string
    }
    aws_cloudformation_stack: {
      capabilities: Array<string>
      description: string
      disable_rollback: boolean
      iam_role_arn: string
      id: string
      name: string
      notification_arns: Array<string>
      outputs: Record<string, string>
      parameters: Record<string, string>
      tags: Record<string, string>
      template_body: string
      timeout_in_minutes: number
    }
    aws_availability_zone: {
      all_availability_zones?: boolean
      group_name: string
      id: string
      name: string
      name_suffix: string
      network_border_group: string
      opt_in_status: string
      region: string
      state: string
      zone_id: string
    }
    aws_elastic_beanstalk_application: {
      appversion_lifecycle: Array<{
        delete_source_from_s3: boolean
        max_age_in_days: number
        max_count: number
        service_role: string
      }>
      arn: string
      description: string
      id: string
      name: string
    }
    aws_batch_compute_environment: {
      arn: string
      compute_environment_name: string
      ecs_cluster_arn: string
      id: string
      service_role: string
      state: string
      status: string
      status_reason: string
      type: string
    }
    aws_redshift_service_account: {arn: string; id: string; region?: string}
    aws_acm_certificate: {
      arn: string
      domain: string
      id: string
      key_types?: Array<string>
      most_recent?: boolean
      statuses?: Array<string>
      tags: Record<string, string>
      types?: Array<string>
    }
    aws_elb_service_account: {arn: string; id: string; region?: string}
    aws_msk_configuration: {
      arn: string
      description: string
      id: string
      kafka_versions: Array<string>
      latest_revision: number
      name: string
      server_properties: string
    }
    aws_security_groups: {id: string; ids: Array<string>; tags: Record<string, string>; vpc_ids: Array<string>}
  }
  resourceStateSchemas: {
    aws_s3_bucket_analytics_configuration: {bucket: string; id: string; name: string}
    aws_ecs_service: {
      cluster: string
      deployment_maximum_percent?: number
      deployment_minimum_healthy_percent?: number
      desired_count?: number
      enable_ecs_managed_tags?: boolean
      force_new_deployment?: boolean
      health_check_grace_period_seconds?: number
      iam_role: string
      id: string
      launch_type: string
      name: string
      platform_version: string
      propagate_tags?: string
      scheduling_strategy?: string
      tags?: Record<string, string>
      task_definition: string
    }
    aws_iot_thing: {
      arn: string
      attributes?: Record<string, string>
      default_client_id: string
      id: string
      name: string
      thing_type_name?: string
      version: number
    }
    aws_pinpoint_adm_channel: {
      application_id: string
      client_id: string
      client_secret: string
      enabled?: boolean
      id: string
    }
    aws_vpc_ipv4_cidr_block_association: {cidr_block: string; id: string; vpc_id: string}
    aws_sagemaker_endpoint_configuration: {
      arn: string
      id: string
      kms_key_arn?: string
      name: string
      tags?: Record<string, string>
    }
    aws_ec2_transit_gateway_route_table_propagation: {
      id: string
      resource_id: string
      resource_type: string
      transit_gateway_attachment_id: string
      transit_gateway_route_table_id: string
    }
    aws_dx_gateway: {amazon_side_asn: string; id: string; name: string; owner_account_id: string}
    aws_batch_job_queue: {
      arn: string
      compute_environments: Array<string>
      id: string
      name: string
      priority: number
      state: string
    }
    aws_transfer_server: {
      arn: string
      endpoint: string
      endpoint_type?: string
      force_destroy?: boolean
      host_key?: string
      host_key_fingerprint: string
      id: string
      identity_provider_type?: string
      invocation_role?: string
      logging_role?: string
      tags?: Record<string, string>
      url?: string
    }
    aws_network_interface_attachment: {
      attachment_id: string
      device_index: number
      id: string
      instance_id: string
      network_interface_id: string
      status: string
    }
    aws_db_event_subscription: {
      arn: string
      customer_aws_id: string
      enabled?: boolean
      event_categories?: Array<string>
      id: string
      name: string
      name_prefix?: string
      sns_topic: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
    }
    aws_s3_bucket: {
      acceleration_status: string
      acl?: string
      arn: string
      bucket: string
      bucket_domain_name: string
      bucket_prefix?: string
      bucket_regional_domain_name: string
      force_destroy?: boolean
      hosted_zone_id: string
      id: string
      policy?: string
      region: string
      request_payer: string
      tags?: Record<string, string>
      website_domain: string
      website_endpoint: string
    }
    aws_opsworks_memcached_layer: {
      allocated_memory?: number
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_iam_service_linked_role: {
      arn: string
      aws_service_name: string
      create_date: string
      custom_suffix?: string
      description?: string
      id: string
      name: string
      path: string
      unique_id: string
    }
    aws_service_discovery_http_namespace: {arn: string; description?: string; id: string; name: string}
    aws_lambda_event_source_mapping: {
      batch_size?: number
      bisect_batch_on_function_error?: boolean
      enabled?: boolean
      event_source_arn: string
      function_arn: string
      function_name: string
      id: string
      last_modified: string
      last_processing_result: string
      maximum_batching_window_in_seconds?: number
      maximum_record_age_in_seconds: number
      maximum_retry_attempts: number
      parallelization_factor: number
      starting_position?: string
      starting_position_timestamp?: string
      state: string
      state_transition_reason: string
      uuid: string
    }
    aws_iam_openid_connect_provider: {
      arn: string
      client_id_list: Array<string>
      id: string
      thumbprint_list: Array<string>
      url: string
    }
    aws_ram_resource_share_accepter: {
      id: string
      invitation_arn: string
      receiver_account_id: string
      resources: Array<string>
      sender_account_id: string
      share_arn: string
      share_id: string
      share_name: string
      status: string
    }
    aws_nat_gateway: {
      allocation_id: string
      id: string
      network_interface_id: string
      private_ip: string
      public_ip: string
      subnet_id: string
      tags?: Record<string, string>
    }
    aws_mq_broker: {
      apply_immediately?: boolean
      arn: string
      auto_minor_version_upgrade?: boolean
      broker_name: string
      deployment_mode?: string
      engine_type: string
      engine_version: string
      host_instance_type: string
      id: string
      instances: Array<{console_url: string; endpoints: Array<string>; ip_address: string}>
      publicly_accessible?: boolean
      security_groups: Array<string>
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_cloudwatch_metric_alarm: {
      actions_enabled?: boolean
      alarm_actions?: Array<string>
      alarm_description?: string
      alarm_name: string
      arn: string
      comparison_operator: string
      datapoints_to_alarm?: number
      dimensions?: Record<string, string>
      evaluate_low_sample_count_percentiles: string
      evaluation_periods: number
      extended_statistic?: string
      id: string
      insufficient_data_actions?: Array<string>
      metric_name?: string
      namespace?: string
      ok_actions?: Array<string>
      period?: number
      statistic?: string
      tags?: Record<string, string>
      threshold?: number
      threshold_metric_id?: string
      treat_missing_data?: string
      unit?: string
    }
    aws_appmesh_route: {
      arn: string
      created_date: string
      id: string
      last_updated_date: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
      virtual_router_name: string
    }
    aws_cloud9_environment_ec2: {
      arn: string
      automatic_stop_time_minutes?: number
      description?: string
      id: string
      instance_type: string
      name: string
      owner_arn: string
      subnet_id?: string
      tags?: Record<string, string>
      type: string
    }
    aws_wafv2_rule_group: {
      arn: string
      capacity: number
      description?: string
      id: string
      lock_token: string
      name: string
      scope: string
      tags?: Record<string, string>
    }
    aws_ssm_maintenance_window_target: {
      description?: string
      id: string
      name?: string
      owner_information?: string
      resource_type: string
      window_id: string
    }
    aws_cloudwatch_log_metric_filter: {id: string; log_group_name: string; name: string; pattern: string}
    aws_iot_policy_attachment: {id: string; policy: string; target: string}
    aws_waf_size_constraint_set: {arn: string; id: string; name: string}
    aws_appsync_function: {
      api_id: string
      arn: string
      data_source: string
      description?: string
      function_id: string
      function_version?: string
      id: string
      name: string
      request_mapping_template: string
      response_mapping_template: string
    }
    aws_organizations_policy: {
      arn: string
      content: string
      description?: string
      id: string
      name: string
      type?: string
    }
    aws_api_gateway_authorizer: {
      authorizer_credentials?: string
      authorizer_result_ttl_in_seconds?: number
      authorizer_uri?: string
      id: string
      identity_source?: string
      identity_validation_expression?: string
      name: string
      provider_arns?: Array<string>
      rest_api_id: string
      type?: string
    }
    aws_quicksight_user: {
      arn: string
      aws_account_id: string
      email: string
      iam_arn?: string
      id: string
      identity_type: string
      namespace?: string
      session_name?: string
      user_name?: string
      user_role: string
    }
    aws_iam_user_policy: {id: string; name: string; name_prefix?: string; policy: string; user: string}
    aws_wafregional_rule_group: {
      arn: string
      id: string
      metric_name: string
      name: string
      tags?: Record<string, string>
    }
    aws_dx_gateway_association: {
      allowed_prefixes: Array<string>
      associated_gateway_id: string
      associated_gateway_owner_account_id: string
      associated_gateway_type: string
      dx_gateway_association_id: string
      dx_gateway_id: string
      dx_gateway_owner_account_id: string
      id: string
      proposal_id?: string
      vpn_gateway_id?: string
    }
    aws_opsworks_nodejs_app_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      nodejs_version?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_dx_public_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      id: string
      name: string
      route_filter_prefixes: Array<string>
      tags?: Record<string, string>
      vlan: number
    }
    aws_codecommit_repository: {
      arn: string
      clone_url_http: string
      clone_url_ssh: string
      default_branch?: string
      description?: string
      id: string
      repository_id: string
      repository_name: string
      tags?: Record<string, string>
    }
    aws_datasync_task: {
      arn: string
      cloudwatch_log_group_arn?: string
      destination_location_arn: string
      id: string
      name?: string
      source_location_arn: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_log_stream: {arn: string; id: string; log_group_name: string; name: string}
    aws_elasticache_security_group: {
      description?: string
      id: string
      name: string
      security_group_names: Array<string>
    }
    aws_ec2_transit_gateway_vpc_attachment_accepter: {
      dns_support: string
      id: string
      ipv6_support: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      transit_gateway_attachment_id: string
      transit_gateway_default_route_table_association?: boolean
      transit_gateway_default_route_table_propagation?: boolean
      transit_gateway_id: string
      vpc_id: string
      vpc_owner_id: string
    }
    aws_codedeploy_deployment_group: {
      app_name: string
      autoscaling_groups?: Array<string>
      deployment_config_name?: string
      deployment_group_name: string
      id: string
      service_role_arn: string
    }
    aws_globalaccelerator_accelerator: {
      dns_name: string
      enabled?: boolean
      hosted_zone_id: string
      id: string
      ip_address_type?: string
      ip_sets: Array<{ip_addresses: Array<string>; ip_family: string}>
      name: string
      tags?: Record<string, string>
    }
    aws_cur_report_definition: {
      additional_artifacts?: Array<string>
      additional_schema_elements: Array<string>
      compression: string
      format: string
      id: string
      report_name: string
      s3_bucket: string
      s3_prefix?: string
      s3_region: string
      time_unit: string
    }
    aws_glue_trigger: {
      arn: string
      description?: string
      enabled?: boolean
      id: string
      name: string
      schedule?: string
      tags?: Record<string, string>
      type: string
      workflow_name?: string
    }
    aws_api_gateway_request_validator: {
      id: string
      name: string
      rest_api_id: string
      validate_request_body?: boolean
      validate_request_parameters?: boolean
    }
    aws_vpc_peering_connection_options: {id: string; vpc_peering_connection_id: string}
    aws_vpc_endpoint: {
      auto_accept?: boolean
      cidr_blocks: Array<string>
      dns_entry: Array<{dns_name: string; hosted_zone_id: string}>
      id: string
      network_interface_ids: Array<string>
      owner_id: string
      policy: string
      prefix_list_id: string
      private_dns_enabled?: boolean
      requester_managed: boolean
      route_table_ids: Array<string>
      security_group_ids: Array<string>
      service_name: string
      state: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_endpoint_type?: string
      vpc_id: string
    }
    aws_storagegateway_nfs_file_share: {
      arn: string
      client_list: Array<string>
      default_storage_class?: string
      fileshare_id: string
      gateway_arn: string
      guess_mime_type_enabled?: boolean
      id: string
      kms_encrypted?: boolean
      kms_key_arn?: string
      location_arn: string
      object_acl?: string
      path: string
      read_only?: boolean
      requester_pays?: boolean
      role_arn: string
      squash?: string
      tags?: Record<string, string>
    }
    aws_iam_access_key: {
      encrypted_secret: string
      id: string
      key_fingerprint: string
      pgp_key?: string
      secret: string
      ses_smtp_password: string
      ses_smtp_password_v4: string
      status: string
      user: string
    }
    aws_neptune_subnet_group: {
      arn: string
      description?: string
      id: string
      name: string
      name_prefix: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_sns_sms_preferences: {
      default_sender_id?: string
      default_sms_type?: string
      delivery_status_iam_role_arn?: string
      delivery_status_success_sampling_rate?: string
      id: string
      monthly_spend_limit?: string
      usage_report_s3_bucket?: string
    }
    aws_cloudfront_public_key: {
      caller_reference: string
      comment?: string
      encoded_key: string
      etag: string
      id: string
      name: string
      name_prefix: string
    }
    aws_storagegateway_gateway: {
      activation_key: string
      arn: string
      cloudwatch_log_group_arn?: string
      gateway_id: string
      gateway_ip_address: string
      gateway_name: string
      gateway_timezone: string
      gateway_type?: string
      gateway_vpc_endpoint?: string
      id: string
      medium_changer_type?: string
      smb_guest_password?: string
      tags?: Record<string, string>
      tape_drive_type?: string
    }
    aws_waf_web_acl: {arn: string; id: string; metric_name: string; name: string; tags?: Record<string, string>}
    aws_waf_regex_pattern_set: {arn: string; id: string; name: string; regex_pattern_strings?: Array<string>}
    aws_athena_workgroup: {
      arn: string
      description?: string
      force_destroy?: boolean
      id: string
      name: string
      state?: string
      tags?: Record<string, string>
    }
    aws_alb_listener_rule: {arn: string; id: string; listener_arn: string; priority: number}
    aws_app_cookie_stickiness_policy: {
      cookie_name: string
      id: string
      lb_port: number
      load_balancer: string
      name: string
    }
    aws_appsync_datasource: {
      api_id: string
      arn: string
      description?: string
      id: string
      name: string
      service_role_arn?: string
      type: string
    }
    aws_guardduty_detector: {account_id: string; enable?: boolean; finding_publishing_frequency: string; id: string}
    aws_redshift_snapshot_copy_grant: {
      arn: string
      id: string
      kms_key_id: string
      snapshot_copy_grant_name: string
      tags?: Record<string, string>
    }
    aws_codestarnotifications_notification_rule: {
      arn: string
      detail_type: string
      event_type_ids: Array<string>
      id: string
      name: string
      resource: string
      status?: string
      tags?: Record<string, string>
    }
    aws_dx_hosted_public_virtual_interface_accepter: {
      arn: string
      id: string
      tags?: Record<string, string>
      virtual_interface_id: string
    }
    aws_organizations_organizational_unit: {
      accounts: Array<{arn: string; email: string; id: string; name: string}>
      arn: string
      id: string
      name: string
      parent_id: string
    }
    aws_ami_launch_permission: {account_id: string; id: string; image_id: string}
    aws_lambda_permission: {
      action: string
      event_source_token?: string
      function_name: string
      id: string
      principal: string
      qualifier?: string
      source_account?: string
      source_arn?: string
      statement_id: string
      statement_id_prefix?: string
    }
    aws_sfn_activity: {creation_date: string; id: string; name: string; tags?: Record<string, string>}
    aws_cloudwatch_log_subscription_filter: {
      destination_arn: string
      distribution?: string
      filter_pattern: string
      id: string
      log_group_name: string
      name: string
      role_arn: string
    }
    aws_dx_hosted_transit_virtual_interface_accepter: {
      arn: string
      dx_gateway_id: string
      id: string
      tags?: Record<string, string>
      virtual_interface_id: string
    }
    aws_sns_topic_policy: {arn: string; id: string; policy: string}
    aws_opsworks_stack: {
      agent_version: string
      arn: string
      berkshelf_version?: string
      color?: string
      configuration_manager_name?: string
      configuration_manager_version?: string
      custom_json?: string
      default_availability_zone: string
      default_instance_profile_arn: string
      default_os?: string
      default_root_device_type?: string
      default_ssh_key_name?: string
      default_subnet_id: string
      hostname_theme?: string
      id: string
      manage_berkshelf?: boolean
      name: string
      region: string
      service_role_arn: string
      stack_endpoint: string
      tags?: Record<string, string>
      use_custom_cookbooks?: boolean
      use_opsworks_security_groups?: boolean
      vpc_id: string
    }
    aws_vpc_dhcp_options_association: {dhcp_options_id: string; id: string; vpc_id: string}
    aws_ec2_traffic_mirror_filter: {
      description?: string
      id: string
      network_services?: Array<string>
      tags?: Record<string, string>
    }
    aws_media_store_container_policy: {container_name: string; id: string; policy: string}
    aws_vpn_connection: {
      customer_gateway_configuration: string
      customer_gateway_id: string
      id: string
      routes: Array<{destination_cidr_block: string; source: string; state: string}>
      static_routes_only: boolean
      tags?: Record<string, string>
      transit_gateway_attachment_id: string
      transit_gateway_id?: string
      tunnel1_address: string
      tunnel1_bgp_asn: string
      tunnel1_bgp_holdtime: number
      tunnel1_cgw_inside_address: string
      tunnel1_inside_cidr: string
      tunnel1_preshared_key: string
      tunnel1_vgw_inside_address: string
      tunnel2_address: string
      tunnel2_bgp_asn: string
      tunnel2_bgp_holdtime: number
      tunnel2_cgw_inside_address: string
      tunnel2_inside_cidr: string
      tunnel2_preshared_key: string
      tunnel2_vgw_inside_address: string
      type: string
      vgw_telemetry: Array<{
        accepted_route_count: number
        last_status_change: string
        outside_ip_address: string
        status: string
        status_message: string
      }>
      vpn_gateway_id?: string
    }
    aws_shield_protection: {id: string; name: string; resource_arn: string}
    aws_accessanalyzer_analyzer: {
      analyzer_name: string
      arn: string
      id: string
      tags?: Record<string, string>
      type?: string
    }
    aws_dx_hosted_public_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      id: string
      name: string
      owner_account_id: string
      route_filter_prefixes: Array<string>
      vlan: number
    }
    aws_alb_target_group: {
      arn: string
      arn_suffix: string
      deregistration_delay?: number
      id: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type: string
      name: string
      name_prefix?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
    }
    aws_autoscaling_group: {
      arn: string
      availability_zones: Array<string>
      default_cooldown: number
      desired_capacity: number
      enabled_metrics?: Array<string>
      force_delete?: boolean
      health_check_grace_period?: number
      health_check_type: string
      id: string
      launch_configuration?: string
      load_balancers: Array<string>
      max_instance_lifetime?: number
      max_size: number
      metrics_granularity?: string
      min_elb_capacity?: number
      min_size: number
      name: string
      name_prefix?: string
      placement_group?: string
      protect_from_scale_in?: boolean
      service_linked_role_arn: string
      suspended_processes?: Array<string>
      tags?: Array<Record<string, string>>
      target_group_arns: Array<string>
      termination_policies?: Array<string>
      vpc_zone_identifier: Array<string>
      wait_for_capacity_timeout?: string
      wait_for_elb_capacity?: number
    }
    aws_ram_resource_share: {
      allow_external_principals?: boolean
      arn: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_gamelift_alias: {arn: string; description?: string; id: string; name: string; tags?: Record<string, string>}
    aws_route_table: {
      id: string
      owner_id: string
      propagating_vgws: Array<string>
      route: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_waf_rate_based_rule: {
      arn: string
      id: string
      metric_name: string
      name: string
      rate_key: string
      rate_limit: number
      tags?: Record<string, string>
    }
    aws_storagegateway_upload_buffer: {disk_id: string; gateway_arn: string; id: string}
    aws_instance: {
      ami: string
      arn: string
      associate_public_ip_address: boolean
      availability_zone: string
      cpu_core_count: number
      cpu_threads_per_core: number
      disable_api_termination?: boolean
      ebs_optimized?: boolean
      get_password_data?: boolean
      hibernation?: boolean
      host_id: string
      iam_instance_profile?: string
      id: string
      instance_initiated_shutdown_behavior?: string
      instance_state: string
      instance_type: string
      ipv6_address_count: number
      ipv6_addresses: Array<string>
      key_name: string
      monitoring?: boolean
      network_interface_id: string
      outpost_arn: string
      password_data: string
      placement_group: string
      primary_network_interface_id: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      security_groups: Array<string>
      source_dest_check?: boolean
      subnet_id: string
      tags?: Record<string, string>
      tenancy: string
      user_data?: string
      user_data_base64?: string
      volume_tags: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_wafregional_web_acl: {arn: string; id: string; metric_name: string; name: string; tags?: Record<string, string>}
    aws_cognito_resource_server: {
      id: string
      identifier: string
      name: string
      scope_identifiers: Array<string>
      user_pool_id: string
    }
    aws_worklink_website_certificate_authority_association: {
      certificate: string
      display_name?: string
      fleet_arn: string
      id: string
      website_ca_id: string
    }
    aws_appautoscaling_target: {
      id: string
      max_capacity: number
      min_capacity: number
      resource_id: string
      role_arn: string
      scalable_dimension: string
      service_namespace: string
    }
    aws_ses_identity_policy: {id: string; identity: string; name: string; policy: string}
    aws_lb_cookie_stickiness_policy: {
      cookie_expiration_period?: number
      id: string
      lb_port: number
      load_balancer: string
      name: string
    }
    aws_sns_topic: {
      application_failure_feedback_role_arn?: string
      application_success_feedback_role_arn?: string
      application_success_feedback_sample_rate?: number
      arn: string
      delivery_policy?: string
      display_name?: string
      http_failure_feedback_role_arn?: string
      http_success_feedback_role_arn?: string
      http_success_feedback_sample_rate?: number
      id: string
      kms_master_key_id?: string
      lambda_failure_feedback_role_arn?: string
      lambda_success_feedback_role_arn?: string
      lambda_success_feedback_sample_rate?: number
      name: string
      name_prefix?: string
      policy: string
      sqs_failure_feedback_role_arn?: string
      sqs_success_feedback_role_arn?: string
      sqs_success_feedback_sample_rate?: number
      tags?: Record<string, string>
    }
    aws_apigatewayv2_vpc_link: {
      arn: string
      id: string
      name: string
      security_group_ids: Array<string>
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_guardduty_ipset: {
      activate: boolean
      detector_id: string
      format: string
      id: string
      location: string
      name: string
    }
    aws_opsworks_static_web_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_iam_role_policy: {id: string; name: string; name_prefix?: string; policy: string; role: string}
    aws_spot_fleet_request: {
      allocation_strategy?: string
      client_token: string
      excess_capacity_termination_policy?: string
      fleet_type?: string
      iam_fleet_role: string
      id: string
      instance_interruption_behaviour?: string
      instance_pools_to_use_count?: number
      load_balancers: Array<string>
      replace_unhealthy_instances?: boolean
      spot_price?: string
      spot_request_state: string
      tags?: Record<string, string>
      target_capacity: number
      target_group_arns: Array<string>
      terminate_instances_with_expiration?: boolean
      valid_from?: string
      valid_until?: string
      wait_for_fulfillment?: boolean
    }
    aws_ec2_transit_gateway_peering_attachment_accepter: {
      id: string
      peer_account_id: string
      peer_region: string
      peer_transit_gateway_id: string
      tags?: Record<string, string>
      transit_gateway_attachment_id: string
      transit_gateway_id: string
    }
    aws_iam_group_policy: {group: string; id: string; name: string; name_prefix?: string; policy: string}
    aws_ec2_transit_gateway_peering_attachment: {
      id: string
      peer_account_id: string
      peer_region: string
      peer_transit_gateway_id: string
      tags?: Record<string, string>
      transit_gateway_id: string
    }
    aws_neptune_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_dms_endpoint: {
      certificate_arn: string
      database_name?: string
      endpoint_arn: string
      endpoint_id: string
      endpoint_type: string
      engine_name: string
      extra_connection_attributes: string
      id: string
      kms_key_arn: string
      password?: string
      port?: number
      server_name?: string
      service_access_role?: string
      ssl_mode: string
      tags?: Record<string, string>
      username?: string
    }
    aws_db_subnet_group: {
      arn: string
      description?: string
      id: string
      name: string
      name_prefix: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_kms_grant: {
      grant_creation_tokens?: Array<string>
      grant_id: string
      grant_token: string
      grantee_principal: string
      id: string
      key_id: string
      name?: string
      operations: Array<string>
      retire_on_delete?: boolean
      retiring_principal?: string
    }
    aws_api_gateway_account: {
      cloudwatch_role_arn?: string
      id: string
      throttle_settings: Array<{burst_limit: number; rate_limit: number}>
    }
    aws_ses_domain_mail_from: {behavior_on_mx_failure?: string; domain: string; id: string; mail_from_domain: string}
    aws_iam_role: {
      arn: string
      assume_role_policy: string
      create_date: string
      description?: string
      force_detach_policies?: boolean
      id: string
      max_session_duration?: number
      name: string
      name_prefix?: string
      path?: string
      permissions_boundary?: string
      tags?: Record<string, string>
      unique_id: string
    }
    aws_cognito_user_group: {
      description?: string
      id: string
      name: string
      precedence?: number
      role_arn?: string
      user_pool_id: string
    }
    aws_api_gateway_documentation_part: {id: string; properties: string; rest_api_id: string}
    aws_vpc_endpoint_service: {
      acceptance_required: boolean
      allowed_principals: Array<string>
      availability_zones: Array<string>
      base_endpoint_dns_names: Array<string>
      id: string
      manages_vpc_endpoints: boolean
      network_load_balancer_arns: Array<string>
      private_dns_name: string
      service_name: string
      service_type: string
      state: string
      tags?: Record<string, string>
    }
    aws_pinpoint_email_channel: {
      application_id: string
      enabled?: boolean
      from_address: string
      id: string
      identity: string
      messages_per_second: number
      role_arn: string
    }
    aws_ami_from_instance: {
      architecture: string
      description?: string
      ena_support: boolean
      id: string
      image_location: string
      kernel_id: string
      manage_ebs_snapshots: boolean
      name: string
      ramdisk_id: string
      root_device_name: string
      root_snapshot_id: string
      snapshot_without_reboot?: boolean
      source_instance_id: string
      sriov_net_support: string
      tags?: Record<string, string>
      virtualization_type: string
    }
    aws_athena_database: {bucket: string; force_destroy?: boolean; id: string; name: string}
    aws_iot_policy: {arn: string; default_version_id: string; id: string; name: string; policy: string}
    aws_ebs_snapshot: {
      data_encryption_key_id: string
      description?: string
      encrypted: boolean
      id: string
      kms_key_id: string
      owner_alias: string
      owner_id: string
      tags?: Record<string, string>
      volume_id: string
      volume_size: number
    }
    aws_sagemaker_endpoint: {
      arn: string
      endpoint_config_name: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_cognito_user_pool: {
      alias_attributes?: Array<string>
      arn: string
      auto_verified_attributes?: Array<string>
      creation_date: string
      email_verification_message: string
      email_verification_subject: string
      endpoint: string
      id: string
      last_modified_date: string
      mfa_configuration?: string
      name: string
      sms_authentication_message?: string
      sms_verification_message: string
      tags?: Record<string, string>
      username_attributes?: Array<string>
    }
    aws_default_vpc: {
      arn: string
      assign_generated_ipv6_cidr_block: boolean
      cidr_block: string
      default_network_acl_id: string
      default_route_table_id: string
      default_security_group_id: string
      dhcp_options_id: string
      enable_classiclink: boolean
      enable_classiclink_dns_support: boolean
      enable_dns_hostnames: boolean
      enable_dns_support?: boolean
      id: string
      instance_tenancy: string
      ipv6_association_id: string
      ipv6_cidr_block: string
      main_route_table_id: string
      owner_id: string
      tags?: Record<string, string>
    }
    aws_kinesis_stream: {
      arn: string
      encryption_type?: string
      enforce_consumer_deletion?: boolean
      id: string
      kms_key_id?: string
      name: string
      retention_period?: number
      shard_count: number
      shard_level_metrics?: Array<string>
      tags?: Record<string, string>
    }
    aws_batch_job_definition: {
      arn: string
      container_properties?: string
      id: string
      name: string
      parameters?: Record<string, string>
      revision: number
      type: string
    }
    aws_ec2_client_vpn_endpoint: {
      arn: string
      client_cidr_block: string
      description?: string
      dns_name: string
      dns_servers?: Array<string>
      id: string
      server_certificate_arn: string
      split_tunnel?: boolean
      status: string
      tags?: Record<string, string>
      transport_protocol?: string
    }
    aws_mq_configuration: {
      arn: string
      data: string
      description?: string
      engine_type: string
      engine_version: string
      id: string
      latest_revision: number
      name: string
      tags?: Record<string, string>
    }
    aws_sqs_queue: {
      arn: string
      content_based_deduplication?: boolean
      delay_seconds?: number
      fifo_queue?: boolean
      id: string
      kms_data_key_reuse_period_seconds: number
      kms_master_key_id?: string
      max_message_size?: number
      message_retention_seconds?: number
      name: string
      name_prefix?: string
      policy: string
      receive_wait_time_seconds?: number
      redrive_policy?: string
      tags?: Record<string, string>
      visibility_timeout_seconds?: number
    }
    aws_kms_alias: {
      arn: string
      id: string
      name?: string
      name_prefix?: string
      target_key_arn: string
      target_key_id: string
    }
    aws_opsworks_application: {
      auto_bundle_on_deploy?: string
      aws_flow_ruby_settings?: string
      data_source_arn?: string
      data_source_database_name?: string
      data_source_type?: string
      description?: string
      document_root?: string
      domains?: Array<string>
      enable_ssl?: boolean
      id: string
      name: string
      rails_env?: string
      short_name: string
      stack_id: string
      type: string
    }
    aws_api_gateway_method_response: {
      http_method: string
      id: string
      resource_id: string
      response_models?: Record<string, string>
      response_parameters?: Record<string, boolean>
      response_parameters_in_json?: string
      rest_api_id: string
      status_code: string
    }
    aws_media_store_container: {arn: string; endpoint: string; id: string; name: string; tags?: Record<string, string>}
    aws_opsworks_permission: {
      allow_ssh: boolean
      allow_sudo: boolean
      id: string
      level: string
      stack_id: string
      user_arn: string
    }
    aws_swf_domain: {
      arn: string
      description?: string
      id: string
      name: string
      name_prefix?: string
      tags?: Record<string, string>
      workflow_execution_retention_period_in_days: string
    }
    aws_wafregional_rate_based_rule: {
      arn: string
      id: string
      metric_name: string
      name: string
      rate_key: string
      rate_limit: number
      tags?: Record<string, string>
    }
    aws_network_acl_rule: {
      cidr_block?: string
      egress?: boolean
      from_port?: number
      icmp_code?: string
      icmp_type?: string
      id: string
      ipv6_cidr_block?: string
      network_acl_id: string
      protocol: string
      rule_action: string
      rule_number: number
      to_port?: number
    }
    aws_vpc_endpoint_route_table_association: {id: string; route_table_id: string; vpc_endpoint_id: string}
    aws_secretsmanager_secret_version: {
      arn: string
      id: string
      secret_binary?: string
      secret_id: string
      secret_string?: string
      version_id: string
      version_stages: Array<string>
    }
    aws_rds_cluster: {
      apply_immediately: boolean
      arn: string
      availability_zones: Array<string>
      backtrack_window?: number
      backup_retention_period?: number
      cluster_identifier: string
      cluster_identifier_prefix: string
      cluster_members: Array<string>
      cluster_resource_id: string
      copy_tags_to_snapshot?: boolean
      database_name: string
      db_cluster_parameter_group_name: string
      db_subnet_group_name: string
      deletion_protection?: boolean
      enable_http_endpoint?: boolean
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint: string
      engine?: string
      engine_mode?: string
      engine_version: string
      final_snapshot_identifier?: string
      global_cluster_identifier?: string
      hosted_zone_id: string
      iam_database_authentication_enabled?: boolean
      iam_roles?: Array<string>
      id: string
      kms_key_id: string
      master_password?: string
      master_username: string
      port: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      reader_endpoint: string
      replication_source_identifier?: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      source_region?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_load_balancer_policy: {id: string; load_balancer_name: string; policy_name: string; policy_type_name: string}
    aws_ec2_capacity_reservation: {
      availability_zone: string
      ebs_optimized?: boolean
      end_date?: string
      end_date_type?: string
      ephemeral_storage?: boolean
      id: string
      instance_count: number
      instance_match_criteria?: string
      instance_platform: string
      instance_type: string
      tags?: Record<string, string>
      tenancy?: string
    }
    aws_lambda_alias: {
      arn: string
      description?: string
      function_name: string
      function_version: string
      id: string
      invoke_arn: string
      name: string
    }
    aws_network_interface_sg_attachment: {id: string; network_interface_id: string; security_group_id: string}
    aws_api_gateway_usage_plan_key: {
      id: string
      key_id: string
      key_type: string
      name: string
      usage_plan_id: string
      value: string
    }
    aws_dx_connection: {
      arn: string
      aws_device: string
      bandwidth: string
      has_logical_redundancy: string
      id: string
      jumbo_frame_capable: boolean
      location: string
      name: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_dashboard: {dashboard_arn: string; dashboard_body: string; dashboard_name: string; id: string}
    aws_msk_cluster: {
      arn: string
      bootstrap_brokers: string
      bootstrap_brokers_tls: string
      cluster_name: string
      current_version: string
      enhanced_monitoring?: string
      id: string
      kafka_version: string
      number_of_broker_nodes: number
      tags?: Record<string, string>
      zookeeper_connect_string: string
    }
    aws_service_discovery_service: {arn: string; description?: string; id: string; name: string; namespace_id: string}
    aws_guardduty_member: {
      account_id: string
      detector_id: string
      disable_email_notification?: boolean
      email: string
      id: string
      invitation_message?: string
      invite?: boolean
      relationship_status: string
    }
    aws_iam_group: {arn: string; id: string; name: string; path?: string; unique_id: string}
    aws_emr_cluster: {
      additional_info?: string
      applications?: Array<string>
      arn: string
      autoscaling_role?: string
      cluster_state: string
      configurations?: string
      configurations_json?: string
      core_instance_count: number
      core_instance_type: string
      custom_ami_id?: string
      ebs_root_volume_size?: number
      id: string
      keep_job_flow_alive_when_no_steps: boolean
      log_uri?: string
      master_instance_type: string
      master_public_dns: string
      name: string
      release_label: string
      scale_down_behavior: string
      security_configuration?: string
      service_role: string
      step: Array<{
        action_on_failure: string
        hadoop_jar_step: Array<{
          args: Array<string>
          jar: string
          main_class: string
          properties: Record<string, string>
        }>
        name: string
      }>
      step_concurrency_level?: number
      tags?: Record<string, string>
      termination_protection: boolean
      visible_to_all_users?: boolean
    }
    aws_datasync_location_s3: {
      arn: string
      id: string
      s3_bucket_arn: string
      subdirectory: string
      tags?: Record<string, string>
      uri: string
    }
    aws_ec2_traffic_mirror_session: {
      description?: string
      id: string
      network_interface_id: string
      packet_length?: number
      session_number: number
      tags?: Record<string, string>
      traffic_mirror_filter_id: string
      traffic_mirror_target_id: string
      virtual_network_id: number
    }
    aws_dms_event_subscription: {
      arn: string
      enabled?: boolean
      event_categories: Array<string>
      id: string
      name: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
    }
    aws_apigatewayv2_deployment: {
      api_id: string
      auto_deployed: boolean
      description?: string
      id: string
      triggers?: Record<string, string>
    }
    aws_vpc_peering_connection: {
      accept_status: string
      auto_accept?: boolean
      id: string
      peer_owner_id: string
      peer_region: string
      peer_vpc_id: string
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_opsworks_custom_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name: string
      short_name: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_transfer_ssh_key: {body: string; id: string; server_id: string; user_name: string}
    aws_wafregional_xss_match_set: {id: string; name: string}
    aws_redshift_subnet_group: {
      arn: string
      description?: string
      id: string
      name: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_ebs_volume: {
      arn: string
      availability_zone: string
      encrypted: boolean
      id: string
      iops: number
      kms_key_id: string
      multi_attach_enabled?: boolean
      outpost_arn?: string
      size: number
      snapshot_id: string
      tags?: Record<string, string>
      type: string
    }
    aws_api_gateway_method: {
      api_key_required?: boolean
      authorization: string
      authorization_scopes?: Array<string>
      authorizer_id?: string
      http_method: string
      id: string
      request_models?: Record<string, string>
      request_parameters?: Record<string, boolean>
      request_parameters_in_json?: string
      request_validator_id?: string
      resource_id: string
      rest_api_id: string
    }
    aws_vpn_gateway: {
      amazon_side_asn: string
      availability_zone?: string
      id: string
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_opsworks_java_app_layer: {
      app_server?: string
      app_server_version?: string
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      jvm_options?: string
      jvm_type?: string
      jvm_version?: string
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_s3_access_point: {
      account_id: string
      arn: string
      bucket: string
      domain_name: string
      has_public_access_policy: boolean
      id: string
      name: string
      network_origin: string
      policy?: string
    }
    aws_api_gateway_rest_api: {
      api_key_source?: string
      arn: string
      binary_media_types?: Array<string>
      body?: string
      created_date: string
      description?: string
      execution_arn: string
      id: string
      minimum_compression_size?: number
      name: string
      policy?: string
      root_resource_id: string
      tags?: Record<string, string>
    }
    aws_waf_byte_match_set: {id: string; name: string}
    aws_proxy_protocol_policy: {id: string; instance_ports: Array<string>; load_balancer: string}
    aws_db_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      name_prefix: string
      tags?: Record<string, string>
    }
    aws_docdb_cluster_snapshot: {
      availability_zones: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn: string
      db_cluster_snapshot_identifier: string
      engine: string
      engine_version: string
      id: string
      kms_key_id: string
      port: number
      snapshot_type: string
      source_db_cluster_snapshot_arn: string
      status: string
      storage_encrypted: boolean
      vpc_id: string
    }
    aws_service_discovery_public_dns_namespace: {
      arn: string
      description?: string
      hosted_zone: string
      id: string
      name: string
    }
    aws_elastic_beanstalk_application: {
      arn: string
      description?: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_vpc_peering_connection_accepter: {
      accept_status: string
      auto_accept?: boolean
      id: string
      peer_owner_id: string
      peer_region: string
      peer_vpc_id: string
      tags?: Record<string, string>
      vpc_id: string
      vpc_peering_connection_id: string
    }
    aws_directory_service_log_subscription: {directory_id: string; id: string; log_group_name: string}
    aws_macie_member_account_association: {id: string; member_account_id: string}
    aws_default_network_acl: {
      default_network_acl_id: string
      id: string
      owner_id: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_lambda_function: {
      arn: string
      description?: string
      filename?: string
      function_name: string
      handler: string
      id: string
      invoke_arn: string
      kms_key_arn?: string
      last_modified: string
      layers?: Array<string>
      memory_size?: number
      publish?: boolean
      qualified_arn: string
      reserved_concurrent_executions?: number
      role: string
      runtime: string
      s3_bucket?: string
      s3_key?: string
      s3_object_version?: string
      source_code_hash: string
      source_code_size: number
      tags?: Record<string, string>
      timeout?: number
      version: string
    }
    aws_efs_mount_target: {
      dns_name: string
      file_system_arn: string
      file_system_id: string
      id: string
      ip_address: string
      network_interface_id: string
      security_groups: Array<string>
      subnet_id: string
    }
    aws_api_gateway_stage: {
      arn: string
      cache_cluster_enabled?: boolean
      cache_cluster_size?: string
      client_certificate_id?: string
      deployment_id: string
      description?: string
      documentation_version?: string
      execution_arn: string
      id: string
      invoke_url: string
      rest_api_id: string
      stage_name: string
      tags?: Record<string, string>
      variables?: Record<string, string>
      xray_tracing_enabled?: boolean
    }
    aws_guardduty_organization_configuration: {auto_enable: boolean; detector_id: string; id: string}
    aws_waf_rule: {arn: string; id: string; metric_name: string; name: string; tags?: Record<string, string>}
    aws_lightsail_static_ip: {arn: string; id: string; ip_address: string; name: string; support_code: string}
    aws_glacier_vault_lock: {
      complete_lock: boolean
      id: string
      ignore_deletion_error?: boolean
      policy: string
      vault_name: string
    }
    aws_gamelift_build: {
      arn: string
      id: string
      name: string
      operating_system: string
      tags?: Record<string, string>
      version?: string
    }
    aws_dlm_lifecycle_policy: {
      arn: string
      description: string
      execution_role_arn: string
      id: string
      state?: string
      tags?: Record<string, string>
    }
    aws_cognito_identity_pool_roles_attachment: {id: string; identity_pool_id: string; roles: Record<string, string>}
    aws_ssm_resource_data_sync: {id: string; name: string}
    aws_cloudhsm_v2_cluster: {
      cluster_certificates: Array<{
        aws_hardware_certificate: string
        cluster_certificate: string
        cluster_csr: string
        hsm_certificate: string
        manufacturer_hardware_certificate: string
      }>
      cluster_id: string
      cluster_state: string
      hsm_type: string
      id: string
      security_group_id: string
      source_backup_identifier?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_lightsail_domain: {arn: string; domain_name: string; id: string}
    aws_datasync_location_efs: {
      arn: string
      efs_file_system_arn: string
      id: string
      subdirectory?: string
      tags?: Record<string, string>
      uri: string
    }
    aws_config_aggregate_authorization: {
      account_id: string
      arn: string
      id: string
      region: string
      tags?: Record<string, string>
    }
    aws_ssm_activation: {
      activation_code: string
      description?: string
      expiration_date: string
      expired: boolean
      iam_role: string
      id: string
      name?: string
      registration_count: number
      registration_limit?: number
      tags?: Record<string, string>
    }
    aws_elasticache_subnet_group: {description?: string; id: string; name: string; subnet_ids: Array<string>}
    aws_snapshot_create_volume_permission: {account_id: string; id: string; snapshot_id: string}
    aws_sagemaker_notebook_instance_lifecycle_configuration: {
      arn: string
      id: string
      name?: string
      on_create?: string
      on_start?: string
    }
    aws_efs_file_system_policy: {file_system_id: string; id: string; policy: string}
    aws_ses_event_destination: {
      configuration_set_name: string
      enabled?: boolean
      id: string
      matching_types: Array<string>
      name: string
    }
    aws_egress_only_internet_gateway: {id: string; tags?: Record<string, string>; vpc_id: string}
    aws_codebuild_source_credential: {
      arn: string
      auth_type: string
      id: string
      server_type: string
      token: string
      user_name?: string
    }
    aws_efs_access_point: {
      arn: string
      file_system_arn: string
      file_system_id: string
      id: string
      owner_id: string
      tags?: Record<string, string>
    }
    aws_workspaces_workspace: {
      bundle_id: string
      computer_name: string
      directory_id: string
      id: string
      ip_address: string
      root_volume_encryption_enabled?: boolean
      state: string
      tags?: Record<string, string>
      user_name: string
      user_volume_encryption_enabled?: boolean
      volume_encryption_key?: string
    }
    aws_vpc: {
      arn: string
      assign_generated_ipv6_cidr_block?: boolean
      cidr_block: string
      default_network_acl_id: string
      default_route_table_id: string
      default_security_group_id: string
      dhcp_options_id: string
      enable_classiclink: boolean
      enable_classiclink_dns_support: boolean
      enable_dns_hostnames: boolean
      enable_dns_support?: boolean
      id: string
      instance_tenancy?: string
      ipv6_association_id: string
      ipv6_cidr_block: string
      main_route_table_id: string
      owner_id: string
      tags?: Record<string, string>
    }
    aws_datasync_agent: {
      activation_key: string
      arn: string
      id: string
      ip_address: string
      name?: string
      tags?: Record<string, string>
    }
    aws_vpn_connection_route: {destination_cidr_block: string; id: string; vpn_connection_id: string}
    aws_licensemanager_association: {id: string; license_configuration_arn: string; resource_arn: string}
    aws_apigatewayv2_integration: {
      api_id: string
      connection_id?: string
      connection_type?: string
      content_handling_strategy?: string
      credentials_arn?: string
      description?: string
      id: string
      integration_method?: string
      integration_response_selection_expression: string
      integration_type: string
      integration_uri?: string
      passthrough_behavior?: string
      payload_format_version?: string
      request_templates?: Record<string, string>
      template_selection_expression?: string
      timeout_milliseconds?: number
    }
    aws_ses_receipt_rule_set: {id: string; rule_set_name: string}
    aws_api_gateway_method_settings: {id: string; method_path: string; rest_api_id: string; stage_name: string}
    aws_wafv2_regex_pattern_set: {
      arn: string
      description?: string
      id: string
      lock_token: string
      name: string
      scope: string
      tags?: Record<string, string>
    }
    aws_appsync_api_key: {api_id: string; description?: string; expires?: string; id: string; key: string}
    aws_iot_thing_type: {arn: string; deprecated?: boolean; id: string; name: string}
    aws_securityhub_product_subscription: {arn: string; id: string; product_arn: string}
    aws_s3_account_public_access_block: {
      account_id: string
      block_public_acls?: boolean
      block_public_policy?: boolean
      id: string
      ignore_public_acls?: boolean
      restrict_public_buckets?: boolean
    }
    aws_config_configuration_recorder_status: {id: string; is_enabled: boolean; name: string}
    aws_dx_lag: {
      arn: string
      connections_bandwidth: string
      force_destroy?: boolean
      has_logical_redundancy: string
      id: string
      jumbo_frame_capable: boolean
      location: string
      name: string
      number_of_connections: number
      tags?: Record<string, string>
    }
    aws_securityhub_account: {id: string}
    aws_vpn_gateway_attachment: {id: string; vpc_id: string; vpn_gateway_id: string}
    aws_guardduty_invite_accepter: {detector_id: string; id: string; master_account_id: string}
    aws_elasticsearch_domain: {
      access_policies: string
      advanced_options: Record<string, string>
      arn: string
      domain_id: string
      domain_name: string
      elasticsearch_version?: string
      endpoint: string
      id: string
      kibana_endpoint: string
      tags?: Record<string, string>
    }
    aws_dx_private_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      dx_gateway_id?: string
      id: string
      jumbo_frame_capable: boolean
      mtu?: number
      name: string
      tags?: Record<string, string>
      vlan: number
      vpn_gateway_id?: string
    }
    aws_iam_group_policy_attachment: {group: string; id: string; policy_arn: string}
    aws_s3_bucket_notification: {bucket: string; id: string}
    aws_iam_user_policy_attachment: {id: string; policy_arn: string; user: string}
    aws_key_pair: {
      fingerprint: string
      id: string
      key_name: string
      key_name_prefix?: string
      key_pair_id: string
      public_key: string
      tags?: Record<string, string>
    }
    aws_acm_certificate: {
      arn: string
      certificate_authority_arn?: string
      certificate_body?: string
      certificate_chain?: string
      domain_name: string
      domain_validation_options: Array<{
        domain_name: string
        resource_record_name: string
        resource_record_type: string
        resource_record_value: string
      }>
      id: string
      private_key?: string
      status: string
      subject_alternative_names: Array<string>
      tags?: Record<string, string>
      validation_emails: Array<string>
      validation_method: string
    }
    aws_db_cluster_snapshot: {
      allocated_storage: number
      availability_zones: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn: string
      db_cluster_snapshot_identifier: string
      engine: string
      engine_version: string
      id: string
      kms_key_id: string
      license_model: string
      port: number
      snapshot_type: string
      source_db_cluster_snapshot_arn: string
      status: string
      storage_encrypted: boolean
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_ebs_encryption_by_default: {enabled?: boolean; id: string}
    aws_codecommit_trigger: {configuration_id: string; id: string; repository_name: string}
    aws_redshift_event_subscription: {
      arn: string
      customer_aws_id: string
      enabled?: boolean
      event_categories?: Array<string>
      id: string
      name: string
      severity?: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      status: string
      tags?: Record<string, string>
    }
    aws_sqs_queue_policy: {id: string; policy: string; queue_url: string}
    aws_config_config_rule: {
      arn: string
      description?: string
      id: string
      input_parameters?: string
      maximum_execution_frequency?: string
      name: string
      rule_id: string
      tags?: Record<string, string>
    }
    aws_ses_configuration_set: {id: string; name: string}
    aws_placement_group: {
      id: string
      name: string
      placement_group_id: string
      strategy: string
      tags?: Record<string, string>
    }
    aws_kinesis_firehose_delivery_stream: {
      arn: string
      destination: string
      destination_id: string
      id: string
      name: string
      tags?: Record<string, string>
      version_id: string
    }
    aws_ecr_repository: {
      arn: string
      id: string
      image_tag_mutability?: string
      name: string
      registry_id: string
      repository_url: string
      tags?: Record<string, string>
    }
    aws_iot_thing_principal_attachment: {id: string; principal: string; thing: string}
    aws_neptune_cluster_instance: {
      address: string
      apply_immediately: boolean
      arn: string
      auto_minor_version_upgrade?: boolean
      availability_zone: string
      cluster_identifier: string
      dbi_resource_id: string
      endpoint: string
      engine?: string
      engine_version: string
      id: string
      identifier: string
      identifier_prefix: string
      instance_class: string
      kms_key_arn: string
      neptune_parameter_group_name?: string
      neptune_subnet_group_name: string
      port?: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      promotion_tier?: number
      publicly_accessible?: boolean
      storage_encrypted: boolean
      tags?: Record<string, string>
      writer: boolean
    }
    aws_lambda_layer_version: {
      arn: string
      compatible_runtimes?: Array<string>
      created_date: string
      description?: string
      filename?: string
      id: string
      layer_arn: string
      layer_name: string
      license_info?: string
      s3_bucket?: string
      s3_key?: string
      s3_object_version?: string
      source_code_hash: string
      source_code_size: number
      version: string
    }
    aws_cloudfront_origin_access_identity: {
      caller_reference: string
      cloudfront_access_identity_path: string
      comment?: string
      etag: string
      iam_arn: string
      id: string
      s3_canonical_user_id: string
    }
    aws_api_gateway_domain_name: {
      arn: string
      certificate_arn?: string
      certificate_body?: string
      certificate_chain?: string
      certificate_name?: string
      certificate_private_key?: string
      certificate_upload_date: string
      cloudfront_domain_name: string
      cloudfront_zone_id: string
      domain_name: string
      id: string
      regional_certificate_arn?: string
      regional_certificate_name?: string
      regional_domain_name: string
      regional_zone_id: string
      security_policy: string
      tags?: Record<string, string>
    }
    aws_ses_identity_notification_topic: {
      id: string
      identity: string
      include_original_headers?: boolean
      notification_type: string
      topic_arn?: string
    }
    aws_launch_template: {
      arn: string
      default_version: number
      description?: string
      disable_api_termination?: boolean
      ebs_optimized?: string
      id: string
      image_id?: string
      instance_initiated_shutdown_behavior?: string
      instance_type?: string
      kernel_id?: string
      key_name?: string
      latest_version: number
      name: string
      name_prefix?: string
      ram_disk_id?: string
      security_group_names?: Array<string>
      tags?: Record<string, string>
      user_data?: string
      vpc_security_group_ids?: Array<string>
    }
    aws_fsx_windows_file_system: {
      active_directory_id?: string
      arn: string
      automatic_backup_retention_days?: number
      copy_tags_to_backups?: boolean
      daily_automatic_backup_start_time: string
      dns_name: string
      id: string
      kms_key_id: string
      network_interface_ids: Array<string>
      owner_id: string
      security_group_ids?: Array<string>
      skip_final_backup?: boolean
      storage_capacity: number
      subnet_ids: Array<string>
      tags?: Record<string, string>
      throughput_capacity: number
      vpc_id: string
      weekly_maintenance_start_time: string
    }
    aws_ram_resource_association: {id: string; resource_arn: string; resource_share_arn: string}
    aws_pinpoint_app: {
      application_id: string
      arn: string
      id: string
      name: string
      name_prefix?: string
      tags?: Record<string, string>
    }
    aws_dms_certificate: {
      certificate_arn: string
      certificate_id: string
      certificate_pem?: string
      certificate_wallet?: string
      id: string
    }
    aws_elasticache_parameter_group: {description?: string; family: string; id: string; name: string}
    aws_autoscaling_policy: {
      adjustment_type?: string
      arn: string
      autoscaling_group_name: string
      cooldown?: number
      estimated_instance_warmup?: number
      id: string
      metric_aggregation_type: string
      min_adjustment_magnitude?: number
      min_adjustment_step?: number
      name: string
      policy_type?: string
      scaling_adjustment?: number
    }
    aws_storagegateway_cache: {disk_id: string; gateway_arn: string; id: string}
    aws_waf_ipset: {arn: string; id: string; name: string}
    aws_ram_principal_association: {id: string; principal: string; resource_share_arn: string}
    aws_appmesh_virtual_service: {
      arn: string
      created_date: string
      id: string
      last_updated_date: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
    }
    aws_dx_hosted_transit_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      id: string
      jumbo_frame_capable: boolean
      mtu?: number
      name: string
      owner_account_id: string
      vlan: number
    }
    aws_redshift_cluster: {
      allow_version_upgrade?: boolean
      arn: string
      automated_snapshot_retention_period?: number
      availability_zone: string
      bucket_name: string
      cluster_identifier: string
      cluster_parameter_group_name: string
      cluster_public_key: string
      cluster_revision_number: string
      cluster_security_groups: Array<string>
      cluster_subnet_group_name: string
      cluster_type: string
      cluster_version?: string
      database_name: string
      dns_name: string
      elastic_ip?: string
      enable_logging: boolean
      encrypted?: boolean
      endpoint: string
      enhanced_vpc_routing: boolean
      final_snapshot_identifier?: string
      iam_roles: Array<string>
      id: string
      kms_key_id: string
      master_password?: string
      master_username?: string
      node_type: string
      number_of_nodes?: number
      owner_account?: string
      port?: number
      preferred_maintenance_window: string
      publicly_accessible?: boolean
      s3_key_prefix: string
      skip_final_snapshot?: boolean
      snapshot_cluster_identifier?: string
      snapshot_identifier?: string
      tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_redshift_security_group: {description?: string; id: string; name: string}
    aws_redshift_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_elb_attachment: {elb: string; id: string; instance: string}
    aws_api_gateway_client_certificate: {
      arn: string
      created_date: string
      description?: string
      expiration_date: string
      id: string
      pem_encoded_certificate: string
      tags?: Record<string, string>
    }
    aws_msk_configuration: {
      arn: string
      description?: string
      id: string
      kafka_versions: Array<string>
      latest_revision: number
      name: string
      server_properties: string
    }
    aws_ec2_traffic_mirror_target: {
      description?: string
      id: string
      network_interface_id?: string
      network_load_balancer_arn?: string
      tags?: Record<string, string>
    }
    aws_dms_replication_task: {
      cdc_start_time?: string
      id: string
      migration_type: string
      replication_instance_arn: string
      replication_task_arn: string
      replication_task_id: string
      replication_task_settings?: string
      source_endpoint_arn: string
      table_mappings: string
      tags?: Record<string, string>
      target_endpoint_arn: string
    }
    aws_alb: {
      arn: string
      arn_suffix: string
      dns_name: string
      drop_invalid_header_fields?: boolean
      enable_cross_zone_load_balancing?: boolean
      enable_deletion_protection?: boolean
      enable_http2?: boolean
      id: string
      idle_timeout?: number
      internal: boolean
      ip_address_type: string
      load_balancer_type?: string
      name: string
      name_prefix?: string
      security_groups: Array<string>
      subnets: Array<string>
      tags?: Record<string, string>
      vpc_id: string
      zone_id: string
    }
    aws_dynamodb_table: {
      arn: string
      billing_mode?: string
      hash_key: string
      id: string
      name: string
      range_key?: string
      read_capacity?: number
      stream_arn: string
      stream_enabled?: boolean
      stream_label: string
      stream_view_type: string
      tags?: Record<string, string>
      write_capacity?: number
    }
    aws_neptune_cluster_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      name_prefix: string
      tags?: Record<string, string>
    }
    aws_glue_crawler: {
      arn: string
      classifiers?: Array<string>
      configuration?: string
      database_name: string
      description?: string
      id: string
      name: string
      role: string
      schedule?: string
      security_configuration?: string
      table_prefix?: string
      tags?: Record<string, string>
    }
    aws_organizations_policy_attachment: {id: string; policy_id: string; target_id: string}
    aws_ssm_document: {
      arn: string
      content: string
      created_date: string
      default_version: string
      description: string
      document_format?: string
      document_type: string
      document_version: string
      hash: string
      hash_type: string
      id: string
      latest_version: string
      name: string
      owner: string
      parameter: Array<{default_value: string; description: string; name: string; type: string}>
      permissions?: Record<string, string>
      platform_types: Array<string>
      schema_version: string
      status: string
      tags?: Record<string, string>
      target_type?: string
    }
    aws_iam_instance_profile: {
      arn: string
      create_date: string
      id: string
      name: string
      name_prefix?: string
      path?: string
      role: string
      roles: Array<string>
      unique_id: string
    }
    aws_pinpoint_event_stream: {application_id: string; destination_stream_arn: string; id: string; role_arn: string}
    aws_vpc_endpoint_subnet_association: {id: string; subnet_id: string; vpc_endpoint_id: string}
    aws_main_route_table_association: {
      id: string
      original_route_table_id: string
      route_table_id: string
      vpc_id: string
    }
    aws_qldb_ledger: {
      arn: string
      deletion_protection?: boolean
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_directory_service_directory: {
      access_url: string
      alias: string
      description?: string
      dns_ip_addresses: Array<string>
      edition: string
      enable_sso?: boolean
      id: string
      name: string
      password: string
      security_group_id: string
      short_name: string
      size: string
      tags?: Record<string, string>
      type?: string
    }
    aws_docdb_subnet_group: {
      arn: string
      description?: string
      id: string
      name: string
      name_prefix: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_s3_bucket_inventory: {
      bucket: string
      enabled?: boolean
      id: string
      included_object_versions: string
      name: string
      optional_fields?: Array<string>
    }
    aws_vpc_endpoint_connection_notification: {
      connection_events: Array<string>
      connection_notification_arn: string
      id: string
      notification_type: string
      state: string
      vpc_endpoint_id?: string
      vpc_endpoint_service_id?: string
    }
    aws_fms_admin_account: {account_id: string; id: string}
    aws_transfer_user: {
      arn: string
      home_directory?: string
      id: string
      policy?: string
      role: string
      server_id: string
      tags?: Record<string, string>
      user_name: string
    }
    aws_db_option_group: {
      arn: string
      engine_name: string
      id: string
      major_engine_version: string
      name: string
      name_prefix: string
      option_group_description?: string
      tags?: Record<string, string>
    }
    aws_alb_listener_certificate: {certificate_arn: string; id: string; listener_arn: string}
    aws_lb_listener: {
      arn: string
      certificate_arn?: string
      id: string
      load_balancer_arn: string
      port: number
      protocol?: string
      ssl_policy: string
    }
    aws_codebuild_project: {
      arn: string
      badge_enabled?: boolean
      badge_url: string
      build_timeout?: number
      description: string
      encryption_key: string
      id: string
      name: string
      queued_timeout?: number
      service_role: string
      source_version?: string
      tags?: Record<string, string>
    }
    aws_iot_topic_rule: {
      arn: string
      description?: string
      enabled: boolean
      id: string
      name: string
      sql: string
      sql_version: string
      tags?: Record<string, string>
    }
    aws_s3_bucket_object: {
      acl?: string
      bucket: string
      cache_control?: string
      content?: string
      content_base64?: string
      content_disposition?: string
      content_encoding?: string
      content_language?: string
      content_type: string
      etag: string
      force_destroy?: boolean
      id: string
      key: string
      kms_key_id?: string
      metadata?: Record<string, string>
      object_lock_legal_hold_status?: string
      object_lock_mode?: string
      object_lock_retain_until_date?: string
      server_side_encryption: string
      source?: string
      storage_class: string
      tags?: Record<string, string>
      version_id: string
      website_redirect?: string
    }
    aws_ecs_capacity_provider: {arn: string; id: string; name: string; tags?: Record<string, string>}
    aws_kms_ciphertext: {
      ciphertext_blob: string
      context?: Record<string, string>
      id: string
      key_id: string
      plaintext: string
    }
    aws_pinpoint_gcm_channel: {api_key: string; application_id: string; enabled?: boolean; id: string}
    aws_globalaccelerator_endpoint_group: {
      endpoint_group_region: string
      health_check_interval_seconds?: number
      health_check_path?: string
      health_check_port?: number
      health_check_protocol?: string
      id: string
      listener_arn: string
      threshold_count?: number
      traffic_dial_percentage?: number
    }
    aws_opsworks_rds_db_instance: {
      db_password: string
      db_user: string
      id: string
      rds_db_instance_arn: string
      stack_id: string
    }
    aws_ec2_transit_gateway_route_table_association: {
      id: string
      resource_id: string
      resource_type: string
      transit_gateway_attachment_id: string
      transit_gateway_route_table_id: string
    }
    aws_redshift_snapshot_schedule_association: {cluster_identifier: string; id: string; schedule_identifier: string}
    aws_iot_certificate: {
      active: boolean
      arn: string
      certificate_pem: string
      csr?: string
      id: string
      private_key: string
      public_key: string
    }
    aws_kms_external_key: {
      arn: string
      deletion_window_in_days?: number
      description?: string
      enabled: boolean
      expiration_model: string
      id: string
      key_material_base64?: string
      key_state: string
      key_usage: string
      policy: string
      tags?: Record<string, string>
      valid_to?: string
    }
    aws_route53_health_check: {
      child_health_threshold?: number
      child_healthchecks?: Array<string>
      cloudwatch_alarm_name?: string
      cloudwatch_alarm_region?: string
      enable_sni: boolean
      failure_threshold?: number
      fqdn?: string
      id: string
      insufficient_data_health_status?: string
      invert_healthcheck?: boolean
      ip_address?: string
      measure_latency?: boolean
      port?: number
      reference_name?: string
      regions?: Array<string>
      request_interval?: number
      resource_path?: string
      search_string?: string
      tags?: Record<string, string>
      type: string
    }
    aws_apigatewayv2_domain_name: {
      api_mapping_selection_expression: string
      arn: string
      domain_name: string
      id: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_event_target: {
      arn: string
      id: string
      input?: string
      input_path?: string
      role_arn?: string
      rule: string
      target_id: string
    }
    aws_cloudhsm_v2_hsm: {
      availability_zone: string
      cluster_id: string
      hsm_eni_id: string
      hsm_id: string
      hsm_state: string
      id: string
      ip_address: string
      subnet_id: string
    }
    aws_elastictranscoder_preset: {
      arn: string
      container: string
      description?: string
      id: string
      name: string
      type: string
      video_codec_options?: Record<string, string>
    }
    aws_dms_replication_subnet_group: {
      id: string
      replication_subnet_group_arn: string
      replication_subnet_group_description: string
      replication_subnet_group_id: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_emr_instance_group: {
      autoscaling_policy?: string
      bid_price?: string
      cluster_id: string
      configurations_json?: string
      ebs_optimized?: boolean
      id: string
      instance_count?: number
      instance_type: string
      name?: string
      running_instance_count: number
      status: string
    }
    aws_rds_cluster_endpoint: {
      arn: string
      cluster_endpoint_identifier: string
      cluster_identifier: string
      custom_endpoint_type: string
      endpoint: string
      excluded_members?: Array<string>
      id: string
      static_members?: Array<string>
      tags?: Record<string, string>
    }
    aws_security_group_rule: {
      cidr_blocks?: Array<string>
      description?: string
      from_port: number
      id: string
      ipv6_cidr_blocks?: Array<string>
      prefix_list_ids?: Array<string>
      protocol: string
      security_group_id: string
      self?: boolean
      source_security_group_id: string
      to_port: number
      type: string
    }
    aws_xray_sampling_rule: {
      arn: string
      attributes?: Record<string, string>
      fixed_rate: number
      host: string
      http_method: string
      id: string
      priority: number
      reservoir_size: number
      resource_arn: string
      rule_name?: string
      service_name: string
      service_type: string
      url_path: string
      version: number
    }
    aws_config_organization_managed_rule: {
      arn: string
      description?: string
      excluded_accounts?: Array<string>
      id: string
      input_parameters?: string
      maximum_execution_frequency?: string
      name: string
      resource_id_scope?: string
      resource_types_scope?: Array<string>
      rule_identifier: string
      tag_key_scope?: string
      tag_value_scope?: string
    }
    aws_wafregional_web_acl_association: {id: string; resource_arn: string; web_acl_id: string}
    aws_ecs_task_definition: {
      arn: string
      container_definitions: string
      cpu?: string
      execution_role_arn?: string
      family: string
      id: string
      ipc_mode?: string
      memory?: string
      network_mode: string
      pid_mode?: string
      requires_compatibilities?: Array<string>
      revision: number
      tags?: Record<string, string>
      task_role_arn?: string
    }
    aws_ecr_lifecycle_policy: {id: string; policy: string; registry_id: string; repository: string}
    aws_docdb_cluster_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      name_prefix: string
      tags?: Record<string, string>
    }
    aws_kinesis_analytics_application: {
      arn: string
      code?: string
      create_timestamp: string
      description?: string
      id: string
      last_update_timestamp: string
      name: string
      status: string
      tags?: Record<string, string>
      version: number
    }
    aws_ami: {
      architecture?: string
      description?: string
      ena_support?: boolean
      id: string
      image_location: string
      kernel_id?: string
      manage_ebs_snapshots: boolean
      name: string
      ramdisk_id?: string
      root_device_name?: string
      root_snapshot_id: string
      sriov_net_support?: string
      tags?: Record<string, string>
      virtualization_type?: string
    }
    aws_opsworks_rails_app_layer: {
      app_server?: string
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      bundler_version?: string
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      manage_bundler?: boolean
      name?: string
      passenger_version?: string
      ruby_version?: string
      rubygems_version?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_media_convert_queue: {
      arn: string
      description?: string
      id: string
      name: string
      pricing_plan?: string
      status?: string
      tags?: Record<string, string>
    }
    aws_worklink_fleet: {
      arn: string
      audit_stream_arn?: string
      company_code: string
      created_time: string
      device_ca_certificate?: string
      display_name?: string
      id: string
      last_updated_time: string
      name: string
      optimize_for_end_user_location?: boolean
    }
    aws_gamelift_fleet: {
      arn: string
      build_id: string
      description?: string
      ec2_instance_type: string
      fleet_type?: string
      id: string
      instance_role_arn?: string
      log_paths: Array<string>
      metric_groups: Array<string>
      name: string
      new_game_session_protection_policy?: string
      operating_system: string
      tags?: Record<string, string>
    }
    aws_backup_plan: {arn: string; id: string; name: string; tags?: Record<string, string>; version: string}
    aws_apigatewayv2_api: {
      api_endpoint: string
      api_key_selection_expression?: string
      arn: string
      credentials_arn?: string
      description?: string
      execution_arn: string
      id: string
      name: string
      protocol_type: string
      route_key?: string
      route_selection_expression?: string
      tags?: Record<string, string>
      target?: string
      version?: string
    }
    aws_lambda_provisioned_concurrency_config: {
      function_name: string
      id: string
      provisioned_concurrent_executions: number
      qualifier: string
    }
    aws_dx_bgp_peer: {
      address_family: string
      amazon_address: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      bgp_peer_id: string
      bgp_status: string
      customer_address: string
      id: string
      virtual_interface_id: string
    }
    aws_ecs_cluster: {
      arn: string
      capacity_providers?: Array<string>
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_budgets_budget: {
      account_id: string
      budget_type: string
      cost_filters: Record<string, string>
      id: string
      limit_amount: string
      limit_unit: string
      name: string
      name_prefix: string
      time_period_end?: string
      time_period_start: string
      time_unit: string
    }
    aws_securityhub_member: {
      account_id: string
      email: string
      id: string
      invite?: boolean
      master_id: string
      member_status: string
    }
    aws_media_package_channel: {
      arn: string
      channel_id: string
      description?: string
      hls_ingest: Array<{ingest_endpoints: Array<{password: string; url: string; username: string}>}>
      id: string
      tags?: Record<string, string>
    }
    aws_wafregional_ipset: {arn: string; id: string; name: string}
    aws_elasticsearch_domain_policy: {access_policies: string; domain_name: string; id: string}
    aws_pinpoint_apns_voip_sandbox_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_api_gateway_vpc_link: {
      arn: string
      description?: string
      id: string
      name: string
      tags?: Record<string, string>
      target_arns: Array<string>
    }
    aws_cloudwatch_log_resource_policy: {id: string; policy_document: string; policy_name: string}
    aws_lightsail_instance: {
      arn: string
      availability_zone: string
      blueprint_id: string
      bundle_id: string
      cpu_count: number
      created_at: string
      id: string
      ipv6_address: string
      is_static_ip: boolean
      key_pair_name?: string
      name: string
      private_ip_address: string
      public_ip_address: string
      ram_size: number
      tags?: Record<string, string>
      user_data?: string
      username: string
    }
    aws_glue_workflow: {
      default_run_properties?: Record<string, string>
      description?: string
      id: string
      name?: string
    }
    aws_iam_group_membership: {group: string; id: string; name: string; users: Array<string>}
    aws_dms_replication_instance: {
      allocated_storage: number
      apply_immediately?: boolean
      auto_minor_version_upgrade: boolean
      availability_zone: string
      engine_version: string
      id: string
      kms_key_arn: string
      multi_az: boolean
      preferred_maintenance_window: string
      publicly_accessible: boolean
      replication_instance_arn: string
      replication_instance_class: string
      replication_instance_id: string
      replication_instance_private_ips: Array<string>
      replication_instance_public_ips: Array<string>
      replication_subnet_group_id: string
      tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_batch_compute_environment: {
      arn: string
      compute_environment_name: string
      compute_environment_name_prefix?: string
      ecc_cluster_arn: string
      ecs_cluster_arn: string
      id: string
      service_role: string
      state?: string
      status: string
      status_reason: string
      type: string
    }
    aws_ec2_transit_gateway_vpc_attachment: {
      dns_support?: string
      id: string
      ipv6_support?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      transit_gateway_default_route_table_association?: boolean
      transit_gateway_default_route_table_propagation?: boolean
      transit_gateway_id: string
      vpc_id: string
      vpc_owner_id: string
    }
    aws_route53_resolver_rule_association: {id: string; name?: string; resolver_rule_id: string; vpc_id: string}
    aws_ec2_availability_zone_group: {group_name: string; id: string; opt_in_status: string}
    aws_elastic_beanstalk_configuration_template: {
      application: string
      description?: string
      environment_id?: string
      id: string
      name: string
      solution_stack_name?: string
    }
    aws_guardduty_threatintelset: {
      activate: boolean
      detector_id: string
      format: string
      id: string
      location: string
      name: string
    }
    aws_directory_service_conditional_forwarder: {
      directory_id: string
      dns_ips: Array<string>
      id: string
      remote_domain_name: string
    }
    aws_ssm_maintenance_window: {
      allow_unassociated_targets?: boolean
      cutoff: number
      description?: string
      duration: number
      enabled?: boolean
      end_date?: string
      id: string
      name: string
      schedule: string
      schedule_timezone?: string
      start_date?: string
      tags?: Record<string, string>
    }
    aws_dax_cluster: {
      arn: string
      availability_zones?: Array<string>
      cluster_address: string
      cluster_name: string
      configuration_endpoint: string
      description?: string
      iam_role_arn: string
      id: string
      maintenance_window: string
      node_type: string
      nodes: Array<{address: string; availability_zone: string; id: string; port: number}>
      notification_topic_arn?: string
      parameter_group_name: string
      port: number
      replication_factor: number
      security_group_ids: Array<string>
      subnet_group_name: string
      tags?: Record<string, string>
    }
    aws_lambda_function_event_invoke_config: {
      function_name: string
      id: string
      maximum_event_age_in_seconds?: number
      maximum_retry_attempts?: number
      qualifier?: string
    }
    aws_iam_account_password_policy: {
      allow_users_to_change_password?: boolean
      expire_passwords: boolean
      hard_expiry: boolean
      id: string
      max_password_age: number
      minimum_password_length?: number
      password_reuse_prevention: number
      require_lowercase_characters: boolean
      require_numbers: boolean
      require_symbols: boolean
      require_uppercase_characters: boolean
    }
    aws_codedeploy_deployment_config: {
      compute_platform?: string
      deployment_config_id: string
      deployment_config_name: string
      id: string
    }
    aws_eks_node_group: {
      ami_type: string
      arn: string
      cluster_name: string
      disk_size: number
      force_update_version?: boolean
      id: string
      instance_types: Array<string>
      labels?: Record<string, string>
      node_group_name: string
      node_role_arn: string
      release_version: string
      resources: Array<{autoscaling_groups: Array<{name: string}>; remote_access_security_group_id: string}>
      status: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      version: string
    }
    aws_rds_cluster_parameter_group: {
      arn: string
      description?: string
      family: string
      id: string
      name: string
      name_prefix: string
      tags?: Record<string, string>
    }
    aws_organizations_account: {
      arn: string
      email: string
      iam_user_access_to_billing?: string
      id: string
      joined_method: string
      joined_timestamp: string
      name: string
      parent_id: string
      role_name?: string
      status: string
      tags?: Record<string, string>
    }
    aws_default_route_table: {
      default_route_table_id: string
      id: string
      owner_id: string
      propagating_vgws?: Array<string>
      route: Array<{
        cidr_block: string
        egress_only_gateway_id: string
        gateway_id: string
        instance_id: string
        ipv6_cidr_block: string
        nat_gateway_id: string
        network_interface_id: string
        transit_gateway_id: string
        vpc_peering_connection_id: string
      }>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_dynamodb_table_item: {hash_key: string; id: string; item: string; range_key?: string; table_name: string}
    aws_ec2_client_vpn_network_association: {
      client_vpn_endpoint_id: string
      id: string
      security_groups: Array<string>
      status: string
      subnet_id: string
      vpc_id: string
    }
    aws_waf_xss_match_set: {arn: string; id: string; name: string}
    aws_network_interface: {
      description?: string
      id: string
      mac_address: string
      outpost_arn: string
      private_dns_name: string
      private_ip: string
      private_ips: Array<string>
      private_ips_count: number
      security_groups: Array<string>
      source_dest_check?: boolean
      subnet_id: string
      tags?: Record<string, string>
    }
    aws_kinesis_video_stream: {
      arn: string
      creation_time: string
      data_retention_in_hours?: number
      device_name?: string
      id: string
      kms_key_id: string
      media_type?: string
      name: string
      tags?: Record<string, string>
      version: string
    }
    aws_datasync_location_nfs: {
      arn: string
      id: string
      server_hostname: string
      subdirectory: string
      tags?: Record<string, string>
      uri: string
    }
    aws_route53_resolver_endpoint: {
      arn: string
      direction: string
      host_vpc_id: string
      id: string
      name?: string
      security_group_ids: Array<string>
      tags?: Record<string, string>
    }
    aws_ec2_transit_gateway_route_table: {
      default_association_route_table: boolean
      default_propagation_route_table: boolean
      id: string
      tags?: Record<string, string>
      transit_gateway_id: string
    }
    aws_opsworks_php_app_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_lb_ssl_negotiation_policy: {id: string; lb_port: number; load_balancer: string; name: string}
    aws_codedeploy_app: {compute_platform?: string; id: string; name: string; unique_id: string}
    aws_sagemaker_notebook_instance: {
      arn: string
      direct_internet_access?: string
      id: string
      instance_type: string
      kms_key_id?: string
      lifecycle_config_name?: string
      name: string
      role_arn: string
      security_groups: Array<string>
      subnet_id?: string
      tags?: Record<string, string>
    }
    aws_apigatewayv2_model: {
      api_id: string
      content_type: string
      description?: string
      id: string
      name: string
      schema: string
    }
    aws_autoscaling_schedule: {
      arn: string
      autoscaling_group_name: string
      desired_capacity: number
      end_time: string
      id: string
      max_size: number
      min_size: number
      recurrence: string
      scheduled_action_name: string
      start_time: string
    }
    aws_opsworks_ganglia_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      password: string
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      url?: string
      use_ebs_optimized_instances?: boolean
      username?: string
    }
    aws_lb_target_group_attachment: {
      availability_zone?: string
      id: string
      port?: number
      target_group_arn: string
      target_id: string
    }
    aws_wafregional_byte_match_set: {id: string; name: string}
    aws_elastic_beanstalk_environment: {
      all_settings: Array<{name: string; namespace: string; resource: string; value: string}>
      application: string
      arn: string
      autoscaling_groups: Array<string>
      cname: string
      cname_prefix: string
      description?: string
      endpoint_url: string
      id: string
      instances: Array<string>
      launch_configurations: Array<string>
      load_balancers: Array<string>
      name: string
      platform_arn: string
      poll_interval?: string
      queues: Array<string>
      solution_stack_name: string
      tags?: Record<string, string>
      template_name?: string
      tier?: string
      triggers: Array<string>
      version_label: string
      wait_for_ready_timeout?: string
    }
    aws_ec2_transit_gateway_route: {
      blackhole?: boolean
      destination_cidr_block: string
      id: string
      transit_gateway_attachment_id?: string
      transit_gateway_route_table_id: string
    }
    aws_alb_target_group_attachment: {
      availability_zone?: string
      id: string
      port?: number
      target_group_arn: string
      target_id: string
    }
    aws_launch_configuration: {
      arn: string
      associate_public_ip_address?: boolean
      ebs_optimized: boolean
      enable_monitoring?: boolean
      iam_instance_profile?: string
      id: string
      image_id: string
      instance_type: string
      key_name: string
      name: string
      name_prefix?: string
      placement_tenancy?: string
      security_groups?: Array<string>
      spot_price?: string
      user_data?: string
      user_data_base64?: string
      vpc_classic_link_id?: string
      vpc_classic_link_security_groups?: Array<string>
    }
    aws_appmesh_virtual_router: {
      arn: string
      created_date: string
      id: string
      last_updated_date: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
    }
    aws_autoscaling_lifecycle_hook: {
      autoscaling_group_name: string
      default_result: string
      heartbeat_timeout?: number
      id: string
      lifecycle_transition: string
      name: string
      notification_metadata?: string
      notification_target_arn?: string
      role_arn?: string
    }
    aws_api_gateway_usage_plan: {
      arn: string
      description?: string
      id: string
      name: string
      product_code?: string
      tags?: Record<string, string>
    }
    aws_fsx_lustre_file_system: {
      arn: string
      dns_name: string
      export_path: string
      id: string
      import_path?: string
      imported_file_chunk_size: number
      network_interface_ids: Array<string>
      owner_id: string
      security_group_ids?: Array<string>
      storage_capacity: number
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id: string
      weekly_maintenance_start_time: string
    }
    aws_simpledb_domain: {id: string; name: string}
    aws_appmesh_mesh: {
      arn: string
      created_date: string
      id: string
      last_updated_date: string
      name: string
      tags?: Record<string, string>
    }
    aws_waf_regex_match_set: {arn: string; id: string; name: string}
    aws_security_group: {
      arn: string
      description?: string
      egress: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      id: string
      ingress: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      name: string
      name_prefix?: string
      owner_id: string
      revoke_rules_on_delete?: boolean
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_lightsail_static_ip_attachment: {id: string; instance_name: string; ip_address: string; static_ip_name: string}
    aws_dx_hosted_private_virtual_interface_accepter: {
      arn: string
      dx_gateway_id?: string
      id: string
      tags?: Record<string, string>
      virtual_interface_id: string
      vpn_gateway_id?: string
    }
    aws_pinpoint_baidu_channel: {
      api_key: string
      application_id: string
      enabled?: boolean
      id: string
      secret_key: string
    }
    aws_lb_target_group: {
      arn: string
      arn_suffix: string
      deregistration_delay?: number
      id: string
      lambda_multi_value_headers_enabled?: boolean
      load_balancing_algorithm_type: string
      name: string
      name_prefix?: string
      port?: number
      protocol?: string
      proxy_protocol_v2?: boolean
      slow_start?: number
      tags?: Record<string, string>
      target_type?: string
      vpc_id?: string
    }
    aws_elastic_beanstalk_application_version: {
      application: string
      arn: string
      bucket: string
      description?: string
      force_delete?: boolean
      id: string
      key: string
      name: string
      tags?: Record<string, string>
    }
    aws_route53_zone: {
      comment?: string
      delegation_set_id?: string
      force_destroy?: boolean
      id: string
      name: string
      name_servers: Array<string>
      tags?: Record<string, string>
      vpc_id: string
      vpc_region: string
      zone_id: string
    }
    aws_opsworks_mysql_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      root_password?: string
      root_password_on_all_instances?: boolean
      stack_id: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_redshift_snapshot_schedule: {
      arn: string
      definitions: Array<string>
      description?: string
      force_destroy?: boolean
      id: string
      identifier: string
      identifier_prefix: string
      tags?: Record<string, string>
    }
    aws_apigatewayv2_authorizer: {
      api_id: string
      authorizer_credentials_arn?: string
      authorizer_type: string
      authorizer_uri?: string
      id: string
      identity_sources: Array<string>
      name: string
    }
    aws_spot_datafeed_subscription: {bucket: string; id: string; prefix?: string}
    aws_ses_receipt_rule: {
      after?: string
      enabled: boolean
      id: string
      name: string
      recipients?: Array<string>
      rule_set_name: string
      scan_enabled: boolean
      tls_policy: string
    }
    aws_lightsail_key_pair: {
      arn: string
      encrypted_fingerprint: string
      encrypted_private_key: string
      fingerprint: string
      id: string
      name: string
      name_prefix?: string
      pgp_key?: string
      private_key: string
      public_key: string
    }
    aws_wafregional_geo_match_set: {id: string; name: string}
    aws_servicecatalog_portfolio: {
      arn: string
      created_time: string
      description: string
      id: string
      name: string
      provider_name?: string
      tags?: Record<string, string>
    }
    aws_lb_listener_rule: {arn: string; id: string; listener_arn: string; priority: number}
    aws_securityhub_standards_subscription: {id: string; standards_arn: string}
    aws_vpc_endpoint_service_allowed_principal: {id: string; principal_arn: string; vpc_endpoint_service_id: string}
    aws_ses_domain_identity: {arn: string; domain: string; id: string; verification_token: string}
    aws_elasticache_cluster: {
      apply_immediately: boolean
      arn: string
      availability_zone: string
      availability_zones?: Array<string>
      az_mode: string
      cache_nodes: Array<{address: string; availability_zone: string; id: string; port: number}>
      cluster_address: string
      cluster_id: string
      configuration_endpoint: string
      engine: string
      engine_version: string
      id: string
      maintenance_window: string
      node_type: string
      notification_topic_arn?: string
      num_cache_nodes: number
      parameter_group_name: string
      port: number
      preferred_availability_zones?: Array<string>
      replication_group_id: string
      security_group_ids: Array<string>
      security_group_names: Array<string>
      snapshot_arns?: Array<string>
      snapshot_name?: string
      snapshot_retention_limit?: number
      snapshot_window: string
      subnet_group_name: string
      tags?: Record<string, string>
    }
    aws_cloudfront_distribution: {
      active_trusted_signers: Record<string, string>
      aliases?: Array<string>
      arn: string
      caller_reference: string
      comment?: string
      default_root_object?: string
      domain_name: string
      enabled: boolean
      etag: string
      hosted_zone_id: string
      http_version?: string
      id: string
      in_progress_validation_batches: number
      is_ipv6_enabled?: boolean
      last_modified_time: string
      price_class?: string
      retain_on_delete?: boolean
      status: string
      tags?: Record<string, string>
      wait_for_deployment?: boolean
      web_acl_id?: string
    }
    aws_db_snapshot: {
      allocated_storage: number
      availability_zone: string
      db_instance_identifier: string
      db_snapshot_arn: string
      db_snapshot_identifier: string
      encrypted: boolean
      engine: string
      engine_version: string
      id: string
      iops: number
      kms_key_id: string
      license_model: string
      option_group_name: string
      port: number
      snapshot_type: string
      source_db_snapshot_identifier: string
      source_region: string
      status: string
      storage_type: string
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_route53_query_log: {cloudwatch_log_group_arn: string; id: string; zone_id: string}
    aws_route53_zone_association: {id: string; vpc_id: string; vpc_region: string; zone_id: string}
    aws_cloudformation_stack_set: {
      administration_role_arn: string
      arn: string
      capabilities?: Array<string>
      description?: string
      execution_role_name?: string
      id: string
      name: string
      parameters?: Record<string, string>
      stack_set_id: string
      tags?: Record<string, string>
      template_body: string
      template_url?: string
    }
    aws_ses_active_receipt_rule_set: {id: string; rule_set_name: string}
    aws_pinpoint_sms_channel: {
      application_id: string
      enabled?: boolean
      id: string
      promotional_messages_per_second: number
      sender_id?: string
      short_code?: string
      transactional_messages_per_second: number
    }
    aws_guardduty_organization_admin_account: {admin_account_id: string; id: string}
    aws_wafregional_regex_match_set: {id: string; name: string}
    aws_rds_global_cluster: {
      arn: string
      database_name?: string
      deletion_protection?: boolean
      engine?: string
      engine_version: string
      global_cluster_identifier: string
      global_cluster_resource_id: string
      id: string
      storage_encrypted?: boolean
    }
    aws_spot_instance_request: {
      ami: string
      arn: string
      associate_public_ip_address: boolean
      availability_zone: string
      block_duration_minutes?: number
      cpu_core_count: number
      cpu_threads_per_core: number
      disable_api_termination?: boolean
      ebs_optimized?: boolean
      get_password_data?: boolean
      hibernation?: boolean
      host_id: string
      iam_instance_profile?: string
      id: string
      instance_initiated_shutdown_behavior?: string
      instance_interruption_behaviour?: string
      instance_state: string
      instance_type: string
      ipv6_address_count: number
      ipv6_addresses: Array<string>
      key_name: string
      launch_group?: string
      monitoring?: boolean
      network_interface_id: string
      outpost_arn: string
      password_data: string
      placement_group: string
      primary_network_interface_id: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      security_groups: Array<string>
      source_dest_check?: boolean
      spot_bid_status: string
      spot_instance_id: string
      spot_price?: string
      spot_request_state: string
      spot_type?: string
      subnet_id: string
      tags?: Record<string, string>
      tenancy: string
      user_data?: string
      user_data_base64?: string
      valid_from: string
      valid_until: string
      volume_tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
      wait_for_fulfillment?: boolean
    }
    aws_volume_attachment: {
      device_name: string
      force_detach?: boolean
      id: string
      instance_id: string
      skip_destroy?: boolean
      volume_id: string
    }
    aws_iot_role_alias: {alias: string; arn: string; credential_duration?: number; id: string; role_arn: string}
    aws_opsworks_instance: {
      agent_version?: string
      ami_id: string
      architecture?: string
      auto_scaling_type?: string
      availability_zone: string
      created_at: string
      delete_ebs?: boolean
      delete_eip?: boolean
      ebs_optimized?: boolean
      ec2_instance_id: string
      ecs_cluster_arn: string
      elastic_ip: string
      hostname: string
      id: string
      infrastructure_class: string
      install_updates_on_boot?: boolean
      instance_profile_arn: string
      instance_type?: string
      last_service_error_id: string
      layer_ids: Array<string>
      os: string
      platform: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      registered_by: string
      reported_agent_version: string
      reported_os_family: string
      reported_os_name: string
      reported_os_version: string
      root_device_type: string
      root_device_volume_id: string
      security_group_ids: Array<string>
      ssh_host_dsa_key_fingerprint: string
      ssh_host_rsa_key_fingerprint: string
      ssh_key_name: string
      stack_id: string
      state?: string
      status: string
      subnet_id: string
      tenancy: string
      virtualization_type: string
    }
    aws_efs_file_system: {
      arn: string
      creation_token: string
      dns_name: string
      encrypted: boolean
      id: string
      kms_key_id: string
      performance_mode: string
      provisioned_throughput_in_mibps?: number
      reference_name: string
      tags?: Record<string, string>
      throughput_mode?: string
    }
    aws_iam_saml_provider: {arn: string; id: string; name: string; saml_metadata_document: string; valid_until: string}
    aws_acm_certificate_validation: {certificate_arn: string; id: string; validation_record_fqdns?: Array<string>}
    aws_default_vpc_dhcp_options: {
      domain_name: string
      domain_name_servers: string
      id: string
      netbios_name_servers?: Array<string>
      netbios_node_type?: string
      ntp_servers: string
      owner_id: string
      tags?: Record<string, string>
    }
    aws_s3_bucket_public_access_block: {
      block_public_acls?: boolean
      block_public_policy?: boolean
      bucket: string
      id: string
      ignore_public_acls?: boolean
      restrict_public_buckets?: boolean
    }
    aws_organizations_organization: {
      accounts: Array<{arn: string; email: string; id: string; name: string; status: string}>
      arn: string
      aws_service_access_principals?: Array<string>
      enabled_policy_types?: Array<string>
      feature_set?: string
      id: string
      master_account_arn: string
      master_account_email: string
      master_account_id: string
      non_master_accounts: Array<{arn: string; email: string; id: string; name: string; status: string}>
      roots: Array<{arn: string; id: string; name: string; policy_types: Array<{status: string; type: string}>}>
    }
    aws_lb: {
      arn: string
      arn_suffix: string
      dns_name: string
      drop_invalid_header_fields?: boolean
      enable_cross_zone_load_balancing?: boolean
      enable_deletion_protection?: boolean
      enable_http2?: boolean
      id: string
      idle_timeout?: number
      internal: boolean
      ip_address_type: string
      load_balancer_type?: string
      name: string
      name_prefix?: string
      security_groups: Array<string>
      subnets: Array<string>
      tags?: Record<string, string>
      vpc_id: string
      zone_id: string
    }
    aws_s3_bucket_policy: {bucket: string; id: string; policy: string}
    aws_api_gateway_documentation_version: {description?: string; id: string; rest_api_id: string; version: string}
    aws_cloudwatch_event_rule: {
      arn: string
      description?: string
      event_pattern?: string
      id: string
      is_enabled?: boolean
      name: string
      name_prefix?: string
      role_arn?: string
      schedule_expression?: string
      tags?: Record<string, string>
    }
    aws_pinpoint_apns_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_apigatewayv2_route: {
      api_id: string
      api_key_required?: boolean
      authorization_scopes?: Array<string>
      authorization_type?: string
      authorizer_id?: string
      id: string
      model_selection_expression?: string
      operation_name?: string
      request_models?: Record<string, string>
      route_key: string
      route_response_selection_expression?: string
      target?: string
    }
    aws_cloudwatch_log_group: {
      arn: string
      id: string
      kms_key_id?: string
      name: string
      name_prefix?: string
      retention_in_days?: number
      tags?: Record<string, string>
    }
    aws_sns_platform_application: {
      arn: string
      event_delivery_failure_topic_arn?: string
      event_endpoint_created_topic_arn?: string
      event_endpoint_deleted_topic_arn?: string
      event_endpoint_updated_topic_arn?: string
      failure_feedback_role_arn?: string
      id: string
      name: string
      platform: string
      platform_credential: string
      platform_principal?: string
      success_feedback_role_arn?: string
      success_feedback_sample_rate?: string
    }
    aws_iam_server_certificate: {
      arn: string
      certificate_body: string
      certificate_chain?: string
      id: string
      name: string
      name_prefix?: string
      path?: string
      private_key: string
    }
    aws_eks_fargate_profile: {
      arn: string
      cluster_name: string
      fargate_profile_name: string
      id: string
      pod_execution_role_arn: string
      status: string
      subnet_ids?: Array<string>
      tags?: Record<string, string>
    }
    aws_elastictranscoder_pipeline: {
      arn: string
      aws_kms_key_arn?: string
      id: string
      input_bucket: string
      name: string
      output_bucket: string
      role: string
    }
    aws_eip: {
      allocation_id: string
      associate_with_private_ip?: string
      association_id: string
      customer_owned_ip: string
      customer_owned_ipv4_pool?: string
      domain: string
      id: string
      instance: string
      network_interface: string
      private_dns: string
      private_ip: string
      public_dns: string
      public_ip: string
      public_ipv4_pool: string
      tags?: Record<string, string>
      vpc: boolean
    }
    aws_ses_template: {html?: string; id: string; name: string; subject?: string; text?: string}
    aws_eks_cluster: {
      arn: string
      certificate_authority: Array<{data: string}>
      created_at: string
      enabled_cluster_log_types?: Array<string>
      endpoint: string
      id: string
      identity: Array<{oidc: Array<{issuer: string}>}>
      name: string
      platform_version: string
      role_arn: string
      status: string
      tags?: Record<string, string>
      version: string
    }
    aws_neptune_cluster_snapshot: {
      allocated_storage: number
      availability_zones: Array<string>
      db_cluster_identifier: string
      db_cluster_snapshot_arn: string
      db_cluster_snapshot_identifier: string
      engine: string
      engine_version: string
      id: string
      kms_key_id: string
      license_model: string
      port: number
      snapshot_type: string
      source_db_cluster_snapshot_arn: string
      status: string
      storage_encrypted: boolean
      vpc_id: string
    }
    aws_ssm_patch_baseline: {
      approved_patches?: Array<string>
      approved_patches_compliance_level?: string
      description?: string
      id: string
      name: string
      operating_system?: string
      rejected_patches?: Array<string>
      tags?: Record<string, string>
    }
    aws_route_table_association: {gateway_id?: string; id: string; route_table_id: string; subnet_id?: string}
    aws_wafregional_size_constraint_set: {arn: string; id: string; name: string}
    aws_glue_job: {
      allocated_capacity: number
      arn: string
      connections?: Array<string>
      default_arguments?: Record<string, string>
      description?: string
      glue_version: string
      id: string
      max_capacity: number
      max_retries?: number
      name: string
      number_of_workers?: number
      role_arn: string
      security_configuration?: string
      tags?: Record<string, string>
      timeout?: number
      worker_type?: string
    }
    aws_apigatewayv2_api_mapping: {
      api_id: string
      api_mapping_key?: string
      domain_name: string
      id: string
      stage: string
    }
    aws_service_discovery_private_dns_namespace: {
      arn: string
      description?: string
      hosted_zone: string
      id: string
      name: string
      vpc: string
    }
    aws_s3_bucket_metric: {bucket: string; id: string; name: string}
    aws_route53_delegation_set: {id: string; name_servers: Array<string>; reference_name?: string}
    aws_backup_vault: {
      arn: string
      id: string
      kms_key_arn: string
      name: string
      recovery_points: number
      tags?: Record<string, string>
    }
    aws_codebuild_webhook: {
      branch_filter?: string
      id: string
      payload_url: string
      project_name: string
      secret: string
      url: string
    }
    aws_dynamodb_global_table: {arn: string; id: string; name: string}
    aws_ec2_traffic_mirror_filter_rule: {
      description?: string
      destination_cidr_block: string
      id: string
      protocol?: number
      rule_action: string
      rule_number: number
      source_cidr_block: string
      traffic_direction: string
      traffic_mirror_filter_id: string
    }
    aws_cloudformation_stack_set_instance: {
      account_id: string
      id: string
      parameter_overrides?: Record<string, string>
      region: string
      retain_stack?: boolean
      stack_id: string
      stack_set_name: string
    }
    aws_iam_user_login_profile: {
      encrypted_password: string
      id: string
      key_fingerprint: string
      password_length?: number
      password_reset_required?: boolean
      pgp_key: string
      user: string
    }
    aws_default_subnet: {
      arn: string
      assign_ipv6_address_on_creation: boolean
      availability_zone: string
      availability_zone_id: string
      cidr_block: string
      id: string
      ipv6_cidr_block: string
      ipv6_cidr_block_association_id: string
      map_public_ip_on_launch: boolean
      outpost_arn?: string
      owner_id: string
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_ec2_transit_gateway: {
      amazon_side_asn?: number
      arn: string
      association_default_route_table_id: string
      auto_accept_shared_attachments?: string
      default_route_table_association?: string
      default_route_table_propagation?: string
      description?: string
      dns_support?: string
      id: string
      owner_id: string
      propagation_default_route_table_id: string
      tags?: Record<string, string>
      vpn_ecmp_support?: string
    }
    aws_dx_hosted_private_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      id: string
      jumbo_frame_capable: boolean
      mtu?: number
      name: string
      owner_account_id: string
      vlan: number
    }
    aws_sfn_state_machine: {
      creation_date: string
      definition: string
      id: string
      name: string
      role_arn: string
      status: string
      tags?: Record<string, string>
    }
    aws_acmpca_certificate_authority: {
      arn: string
      certificate: string
      certificate_chain: string
      certificate_signing_request: string
      enabled?: boolean
      id: string
      not_after: string
      not_before: string
      permanent_deletion_time_in_days?: number
      serial: string
      status: string
      tags?: Record<string, string>
      type?: string
    }
    aws_api_gateway_integration: {
      cache_key_parameters?: Array<string>
      cache_namespace: string
      connection_id?: string
      connection_type?: string
      content_handling?: string
      credentials?: string
      http_method: string
      id: string
      integration_http_method?: string
      passthrough_behavior: string
      request_parameters?: Record<string, string>
      request_parameters_in_json?: string
      request_templates?: Record<string, string>
      resource_id: string
      rest_api_id: string
      timeout_milliseconds?: number
      type: string
      uri?: string
    }
    aws_waf_sql_injection_match_set: {id: string; name: string}
    aws_ses_receipt_filter: {cidr: string; id: string; name: string; policy: string}
    aws_waf_rule_group: {arn: string; id: string; metric_name: string; name: string; tags?: Record<string, string>}
    aws_config_organization_custom_rule: {
      arn: string
      description?: string
      excluded_accounts?: Array<string>
      id: string
      input_parameters?: string
      lambda_function_arn: string
      maximum_execution_frequency?: string
      name: string
      resource_id_scope?: string
      resource_types_scope?: Array<string>
      tag_key_scope?: string
      tag_value_scope?: string
      trigger_types: Array<string>
    }
    aws_opsworks_user_profile: {
      allow_self_management?: boolean
      id: string
      ssh_public_key?: string
      ssh_username: string
      user_arn: string
    }
    aws_autoscaling_notification: {
      group_names: Array<string>
      id: string
      notifications: Array<string>
      topic_arn: string
    }
    aws_ses_domain_dkim: {dkim_tokens: Array<string>; domain: string; id: string}
    aws_cognito_user_pool_client: {
      allowed_oauth_flows?: Array<string>
      allowed_oauth_flows_user_pool_client?: boolean
      allowed_oauth_scopes?: Array<string>
      callback_urls?: Array<string>
      client_secret: string
      default_redirect_uri?: string
      explicit_auth_flows?: Array<string>
      generate_secret?: boolean
      id: string
      logout_urls?: Array<string>
      name: string
      prevent_user_existence_errors: string
      read_attributes?: Array<string>
      refresh_token_validity?: number
      supported_identity_providers?: Array<string>
      user_pool_id: string
      write_attributes?: Array<string>
    }
    aws_route53_record: {
      allow_overwrite: boolean
      fqdn: string
      health_check_id?: string
      id: string
      multivalue_answer_routing_policy?: boolean
      name: string
      records?: Array<string>
      set_identifier?: string
      ttl?: number
      type: string
      zone_id: string
    }
    aws_cloudtrail: {
      arn: string
      cloud_watch_logs_group_arn?: string
      cloud_watch_logs_role_arn?: string
      enable_log_file_validation?: boolean
      enable_logging?: boolean
      home_region: string
      id: string
      include_global_service_events?: boolean
      is_multi_region_trail?: boolean
      is_organization_trail?: boolean
      kms_key_id?: string
      name: string
      s3_bucket_name: string
      s3_key_prefix?: string
      sns_topic_name?: string
      tags?: Record<string, string>
    }
    aws_appmesh_virtual_node: {
      arn: string
      created_date: string
      id: string
      last_updated_date: string
      mesh_name: string
      name: string
      tags?: Record<string, string>
    }
    aws_servicequotas_service_quota: {
      adjustable: boolean
      arn: string
      default_value: number
      id: string
      quota_code: string
      quota_name: string
      request_id: string
      request_status: string
      service_code: string
      service_name: string
      value: number
    }
    aws_autoscaling_attachment: {
      alb_target_group_arn?: string
      autoscaling_group_name: string
      elb?: string
      id: string
    }
    aws_route: {
      destination_cidr_block?: string
      destination_ipv6_cidr_block?: string
      destination_prefix_list_id: string
      egress_only_gateway_id: string
      gateway_id: string
      id: string
      instance_id: string
      instance_owner_id: string
      nat_gateway_id: string
      network_interface_id: string
      origin: string
      route_table_id: string
      state: string
      transit_gateway_id?: string
      vpc_peering_connection_id?: string
    }
    aws_route53_resolver_rule: {
      arn: string
      domain_name: string
      id: string
      name?: string
      owner_id: string
      resolver_endpoint_id?: string
      rule_type: string
      share_status: string
      tags?: Record<string, string>
    }
    aws_kms_key: {
      arn: string
      customer_master_key_spec?: string
      deletion_window_in_days?: number
      description: string
      enable_key_rotation?: boolean
      id: string
      is_enabled?: boolean
      key_id: string
      key_usage?: string
      policy: string
      tags?: Record<string, string>
    }
    aws_cloudwatch_log_destination_policy: {access_policy: string; destination_name: string; id: string}
    aws_licensemanager_license_configuration: {
      description?: string
      id: string
      license_count?: number
      license_count_hard_limit?: boolean
      license_counting_type: string
      license_rules?: Array<string>
      name: string
      tags?: Record<string, string>
    }
    aws_sns_topic_subscription: {
      arn: string
      confirmation_timeout_in_minutes?: number
      delivery_policy?: string
      endpoint: string
      endpoint_auto_confirms?: boolean
      filter_policy?: string
      id: string
      protocol: string
      raw_message_delivery?: boolean
      topic_arn: string
    }
    aws_internet_gateway: {id: string; owner_id: string; tags?: Record<string, string>; vpc_id?: string}
    aws_elb: {
      arn: string
      availability_zones: Array<string>
      connection_draining?: boolean
      connection_draining_timeout?: number
      cross_zone_load_balancing?: boolean
      dns_name: string
      id: string
      idle_timeout?: number
      instances: Array<string>
      internal: boolean
      name: string
      name_prefix?: string
      security_groups: Array<string>
      source_security_group: string
      source_security_group_id: string
      subnets: Array<string>
      tags?: Record<string, string>
      zone_id: string
    }
    aws_ssm_patch_group: {baseline_id: string; id: string; patch_group: string}
    aws_inspector_assessment_target: {arn: string; id: string; name: string; resource_group_arn?: string}
    aws_ssm_association: {
      association_id: string
      association_name?: string
      automation_target_parameter_name?: string
      compliance_severity?: string
      document_version: string
      id: string
      instance_id?: string
      max_concurrency?: string
      max_errors?: string
      name: string
      parameters: Record<string, string>
      schedule_expression?: string
    }
    aws_sagemaker_model: {
      arn: string
      enable_network_isolation?: boolean
      execution_role_arn: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_flow_log: {
      eni_id?: string
      iam_role_arn?: string
      id: string
      log_destination: string
      log_destination_type?: string
      log_format: string
      log_group_name: string
      max_aggregation_interval?: number
      subnet_id?: string
      tags?: Record<string, string>
      traffic_type: string
      vpc_id?: string
    }
    aws_docdb_cluster: {
      apply_immediately: boolean
      arn: string
      availability_zones: Array<string>
      backup_retention_period?: number
      cluster_identifier: string
      cluster_identifier_prefix: string
      cluster_members: Array<string>
      cluster_resource_id: string
      db_cluster_parameter_group_name: string
      db_subnet_group_name: string
      deletion_protection?: boolean
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint: string
      engine?: string
      engine_version: string
      final_snapshot_identifier?: string
      hosted_zone_id: string
      id: string
      kms_key_id: string
      master_password?: string
      master_username: string
      port?: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      reader_endpoint: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_appsync_graphql_api: {
      arn: string
      authentication_type: string
      id: string
      name: string
      schema?: string
      tags?: Record<string, string>
      uris: Record<string, string>
      xray_enabled?: boolean
    }
    aws_iam_policy_attachment: {
      groups?: Array<string>
      id: string
      name: string
      policy_arn: string
      roles?: Array<string>
      users?: Array<string>
    }
    aws_gamelift_game_session_queue: {
      arn: string
      destinations?: Array<string>
      id: string
      name: string
      tags?: Record<string, string>
      timeout_in_seconds?: number
    }
    aws_cloudformation_stack: {
      capabilities?: Array<string>
      disable_rollback?: boolean
      iam_role_arn?: string
      id: string
      name: string
      notification_arns?: Array<string>
      on_failure?: string
      outputs: Record<string, string>
      parameters: Record<string, string>
      policy_body: string
      policy_url?: string
      tags?: Record<string, string>
      template_body: string
      template_url?: string
      timeout_in_minutes?: number
    }
    aws_load_balancer_listener_policy: {
      id: string
      load_balancer_name: string
      load_balancer_port: number
      policy_names?: Array<string>
    }
    aws_api_gateway_gateway_response: {
      id: string
      response_parameters?: Record<string, string>
      response_templates?: Record<string, string>
      response_type: string
      rest_api_id: string
      status_code?: string
    }
    aws_quicksight_group: {
      arn: string
      aws_account_id: string
      description?: string
      group_name: string
      id: string
      namespace?: string
    }
    aws_storagegateway_smb_file_share: {
      arn: string
      authentication?: string
      default_storage_class?: string
      fileshare_id: string
      gateway_arn: string
      guess_mime_type_enabled?: boolean
      id: string
      invalid_user_list?: Array<string>
      kms_encrypted?: boolean
      kms_key_arn?: string
      location_arn: string
      object_acl?: string
      path: string
      read_only?: boolean
      requester_pays?: boolean
      role_arn: string
      tags?: Record<string, string>
      valid_user_list?: Array<string>
    }
    aws_codepipeline: {arn: string; id: string; name: string; role_arn: string; tags?: Record<string, string>}
    aws_dx_transit_virtual_interface: {
      address_family: string
      amazon_address: string
      amazon_side_asn: string
      arn: string
      aws_device: string
      bgp_asn: number
      bgp_auth_key: string
      connection_id: string
      customer_address: string
      dx_gateway_id: string
      id: string
      jumbo_frame_capable: boolean
      mtu?: number
      name: string
      tags?: Record<string, string>
      vlan: number
    }
    aws_cognito_user_pool_domain: {
      aws_account_id: string
      certificate_arn?: string
      cloudfront_distribution_arn: string
      domain: string
      id: string
      s3_bucket: string
      user_pool_id: string
      version: string
    }
    aws_ses_email_identity: {arn: string; email: string; id: string}
    aws_iam_user: {
      arn: string
      force_destroy?: boolean
      id: string
      name: string
      path?: string
      permissions_boundary?: string
      tags?: Record<string, string>
      unique_id: string
    }
    aws_alb_listener: {
      arn: string
      certificate_arn?: string
      id: string
      load_balancer_arn: string
      port: number
      protocol?: string
      ssl_policy: string
    }
    aws_inspector_assessment_template: {
      arn: string
      duration: number
      id: string
      name: string
      rules_package_arns: Array<string>
      tags?: Record<string, string>
      target_arn: string
    }
    aws_emr_security_configuration: {
      configuration: string
      creation_date: string
      id: string
      name: string
      name_prefix?: string
    }
    aws_api_gateway_base_path_mapping: {
      api_id: string
      base_path?: string
      domain_name: string
      id: string
      stage_name?: string
    }
    aws_macie_s3_bucket_association: {bucket_name: string; id: string; member_account_id?: string; prefix?: string}
    aws_config_delivery_channel: {
      id: string
      name?: string
      s3_bucket_name: string
      s3_key_prefix?: string
      sns_topic_arn?: string
    }
    aws_datasync_location_smb: {
      agent_arns: Array<string>
      arn: string
      domain: string
      id: string
      password: string
      server_hostname: string
      subdirectory: string
      tags?: Record<string, string>
      uri: string
      user: string
    }
    aws_apigatewayv2_integration_response: {
      api_id: string
      content_handling_strategy?: string
      id: string
      integration_id: string
      integration_response_key: string
      response_templates?: Record<string, string>
      template_selection_expression?: string
    }
    aws_cognito_identity_provider: {
      attribute_mapping: Record<string, string>
      id: string
      idp_identifiers?: Array<string>
      provider_details: Record<string, string>
      provider_name: string
      provider_type: string
      user_pool_id: string
    }
    aws_docdb_cluster_instance: {
      apply_immediately: boolean
      arn: string
      auto_minor_version_upgrade?: boolean
      availability_zone: string
      ca_cert_identifier: string
      cluster_identifier: string
      db_subnet_group_name: string
      dbi_resource_id: string
      endpoint: string
      engine?: string
      engine_version: string
      id: string
      identifier: string
      identifier_prefix: string
      instance_class: string
      kms_key_id: string
      port: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      promotion_tier?: number
      publicly_accessible: boolean
      storage_encrypted: boolean
      tags?: Record<string, string>
      writer: boolean
    }
    aws_inspector_resource_group: {arn: string; id: string; tags: Record<string, string>}
    aws_api_gateway_integration_response: {
      content_handling?: string
      http_method: string
      id: string
      resource_id: string
      response_parameters?: Record<string, string>
      response_parameters_in_json?: string
      response_templates?: Record<string, string>
      rest_api_id: string
      selection_pattern?: string
      status_code: string
    }
    aws_ssm_maintenance_window_task: {
      description?: string
      id: string
      max_concurrency: string
      max_errors: string
      name?: string
      priority?: number
      service_role_arn: string
      task_arn: string
      task_type: string
      window_id: string
    }
    aws_iam_policy: {
      arn: string
      description?: string
      id: string
      name: string
      name_prefix?: string
      path?: string
      policy: string
    }
    aws_appsync_resolver: {
      api_id: string
      arn: string
      data_source?: string
      field: string
      id: string
      kind?: string
      request_template: string
      response_template: string
      type: string
    }
    aws_default_security_group: {
      arn: string
      description: string
      egress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      id: string
      ingress?: Array<{
        cidr_blocks: Array<string>
        description: string
        from_port: number
        ipv6_cidr_blocks: Array<string>
        prefix_list_ids: Array<string>
        protocol: string
        security_groups: Array<string>
        self: boolean
        to_port: number
      }>
      name: string
      owner_id: string
      revoke_rules_on_delete?: boolean
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_iam_role_policy_attachment: {id: string; policy_arn: string; role: string}
    aws_workspaces_directory: {
      alias: string
      customer_user_name: string
      directory_id: string
      directory_name: string
      directory_type: string
      dns_ip_addresses: Array<string>
      iam_role_id: string
      id: string
      ip_group_ids: Array<string>
      registration_code: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      workspace_security_group_id: string
    }
    aws_datapipeline_pipeline: {description?: string; id: string; name: string; tags?: Record<string, string>}
    aws_ebs_snapshot_copy: {
      data_encryption_key_id: string
      description?: string
      encrypted?: boolean
      id: string
      kms_key_id?: string
      owner_alias: string
      owner_id: string
      source_region: string
      source_snapshot_id: string
      tags?: Record<string, string>
      volume_id: string
      volume_size: number
    }
    aws_glue_catalog_table: {
      catalog_id: string
      database_name: string
      description?: string
      id: string
      name: string
      owner?: string
      parameters?: Record<string, string>
      retention?: number
      table_type?: string
      view_expanded_text?: string
      view_original_text?: string
    }
    aws_subnet: {
      arn: string
      assign_ipv6_address_on_creation?: boolean
      availability_zone: string
      availability_zone_id: string
      cidr_block: string
      id: string
      ipv6_cidr_block: string
      ipv6_cidr_block_association_id: string
      map_public_ip_on_launch?: boolean
      outpost_arn?: string
      owner_id: string
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_cognito_identity_pool: {
      allow_unauthenticated_identities?: boolean
      arn: string
      developer_provider_name?: string
      id: string
      identity_pool_name: string
      openid_connect_provider_arns?: Array<string>
      saml_provider_arns?: Array<string>
      supported_login_providers?: Record<string, string>
      tags?: Record<string, string>
    }
    aws_customer_gateway: {bgp_asn: number; id: string; ip_address: string; tags?: Record<string, string>; type: string}
    aws_apigatewayv2_stage: {
      api_id: string
      arn: string
      auto_deploy?: boolean
      client_certificate_id?: string
      deployment_id?: string
      description?: string
      execution_arn: string
      id: string
      invoke_url: string
      name: string
      stage_variables?: Record<string, string>
      tags?: Record<string, string>
    }
    aws_ec2_fleet: {
      excess_capacity_termination_policy?: string
      id: string
      replace_unhealthy_instances?: boolean
      tags?: Record<string, string>
      terminate_instances?: boolean
      terminate_instances_with_expiration?: boolean
      type?: string
    }
    aws_vpc_dhcp_options: {
      domain_name?: string
      domain_name_servers?: Array<string>
      id: string
      netbios_name_servers?: Array<string>
      netbios_node_type?: string
      ntp_servers?: Array<string>
      owner_id: string
      tags?: Record<string, string>
    }
    aws_resourcegroups_group: {
      arn: string
      description?: string
      id: string
      name: string
      tags?: Record<string, string>
    }
    aws_api_gateway_deployment: {
      created_date: string
      description?: string
      execution_arn: string
      id: string
      invoke_url: string
      rest_api_id: string
      stage_description?: string
      stage_name?: string
      triggers?: Record<string, string>
      variables?: Record<string, string>
    }
    aws_db_instance: {
      address: string
      allocated_storage: number
      allow_major_version_upgrade?: boolean
      apply_immediately: boolean
      arn: string
      auto_minor_version_upgrade?: boolean
      availability_zone: string
      backup_retention_period: number
      backup_window: string
      ca_cert_identifier: string
      character_set_name: string
      copy_tags_to_snapshot?: boolean
      db_subnet_group_name: string
      delete_automated_backups?: boolean
      deletion_protection?: boolean
      domain?: string
      domain_iam_role_name?: string
      enabled_cloudwatch_logs_exports?: Array<string>
      endpoint: string
      engine: string
      engine_version: string
      final_snapshot_identifier?: string
      hosted_zone_id: string
      iam_database_authentication_enabled?: boolean
      id: string
      identifier: string
      identifier_prefix: string
      instance_class: string
      iops?: number
      kms_key_id: string
      license_model: string
      maintenance_window: string
      max_allocated_storage?: number
      monitoring_interval?: number
      monitoring_role_arn: string
      multi_az: boolean
      name: string
      option_group_name: string
      parameter_group_name: string
      password?: string
      performance_insights_enabled?: boolean
      performance_insights_kms_key_id: string
      performance_insights_retention_period: number
      port: number
      publicly_accessible?: boolean
      replicas: Array<string>
      replicate_source_db?: string
      resource_id: string
      security_group_names?: Array<string>
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      status: string
      storage_encrypted?: boolean
      storage_type: string
      tags?: Record<string, string>
      timezone: string
      username: string
      vpc_security_group_ids: Array<string>
    }
    aws_cloudwatch_log_destination: {arn: string; id: string; name: string; role_arn: string; target_arn: string}
    aws_ssm_parameter: {
      allowed_pattern?: string
      arn: string
      description?: string
      id: string
      key_id: string
      name: string
      overwrite?: boolean
      tags?: Record<string, string>
      tier?: string
      type: string
      value: string
      version: number
    }
    aws_appautoscaling_policy: {
      adjustment_type?: string
      arn: string
      cooldown?: number
      id: string
      metric_aggregation_type?: string
      min_adjustment_magnitude?: number
      name: string
      policy_type?: string
      resource_id: string
      scalable_dimension: string
      service_namespace: string
    }
    aws_neptune_event_subscription: {
      arn: string
      customer_aws_id: string
      enabled?: boolean
      event_categories?: Array<string>
      id: string
      name: string
      name_prefix: string
      sns_topic_arn: string
      source_ids?: Array<string>
      source_type?: string
      tags?: Record<string, string>
    }
    aws_ebs_default_kms_key: {id: string; key_arn: string}
    aws_workspaces_ip_group: {description?: string; id: string; name: string; tags?: Record<string, string>}
    aws_ses_domain_identity_verification: {arn: string; domain: string; id: string}
    aws_opsworks_haproxy_layer: {
      arn: string
      auto_assign_elastic_ips?: boolean
      auto_assign_public_ips?: boolean
      auto_healing?: boolean
      custom_configure_recipes?: Array<string>
      custom_deploy_recipes?: Array<string>
      custom_instance_profile_arn?: string
      custom_json?: string
      custom_security_group_ids?: Array<string>
      custom_setup_recipes?: Array<string>
      custom_shutdown_recipes?: Array<string>
      custom_undeploy_recipes?: Array<string>
      drain_elb_on_shutdown?: boolean
      elastic_load_balancer?: string
      healthcheck_method?: string
      healthcheck_url?: string
      id: string
      install_updates_on_boot?: boolean
      instance_shutdown_timeout?: number
      name?: string
      stack_id: string
      stats_enabled?: boolean
      stats_password: string
      stats_url?: string
      stats_user?: string
      system_packages?: Array<string>
      tags?: Record<string, string>
      use_ebs_optimized_instances?: boolean
    }
    aws_glacier_vault: {
      access_policy?: string
      arn: string
      id: string
      location: string
      name: string
      tags?: Record<string, string>
    }
    aws_appautoscaling_scheduled_action: {
      arn: string
      end_time?: string
      id: string
      name: string
      resource_id: string
      scalable_dimension?: string
      schedule?: string
      service_namespace: string
      start_time?: string
    }
    aws_neptune_cluster: {
      apply_immediately: boolean
      arn: string
      availability_zones: Array<string>
      backup_retention_period?: number
      cluster_identifier: string
      cluster_identifier_prefix: string
      cluster_members: Array<string>
      cluster_resource_id: string
      deletion_protection?: boolean
      enable_cloudwatch_logs_exports?: Array<string>
      endpoint: string
      engine?: string
      engine_version: string
      final_snapshot_identifier?: string
      hosted_zone_id: string
      iam_database_authentication_enabled?: boolean
      iam_roles?: Array<string>
      id: string
      kms_key_arn: string
      neptune_cluster_parameter_group_name?: string
      neptune_subnet_group_name: string
      port?: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      reader_endpoint: string
      replication_source_identifier?: string
      skip_final_snapshot?: boolean
      snapshot_identifier?: string
      storage_encrypted?: boolean
      tags?: Record<string, string>
      vpc_security_group_ids: Array<string>
    }
    aws_globalaccelerator_listener: {accelerator_arn: string; client_affinity?: string; id: string; protocol: string}
    aws_dx_gateway_association_proposal: {
      allowed_prefixes: Array<string>
      associated_gateway_id?: string
      associated_gateway_owner_account_id: string
      associated_gateway_type: string
      dx_gateway_id: string
      dx_gateway_owner_account_id: string
      id: string
      vpn_gateway_id?: string
    }
    aws_waf_geo_match_set: {arn: string; id: string; name: string}
    aws_cloudwatch_event_permission: {action?: string; id: string; principal: string; statement_id: string}
    aws_dax_parameter_group: {description?: string; id: string; name: string}
    aws_devicefarm_project: {arn: string; id: string; name: string}
    aws_api_gateway_resource: {id: string; parent_id: string; path: string; path_part: string; rest_api_id: string}
    aws_glue_security_configuration: {id: string; name: string}
    aws_iam_user_ssh_key: {
      encoding: string
      fingerprint: string
      id: string
      public_key: string
      ssh_public_key_id: string
      status: string
      username: string
    }
    aws_db_instance_role_association: {
      db_instance_identifier: string
      feature_name: string
      id: string
      role_arn: string
    }
    aws_api_gateway_model: {
      content_type: string
      description?: string
      id: string
      name: string
      rest_api_id: string
      schema?: string
    }
    aws_storagegateway_working_storage: {disk_id: string; gateway_arn: string; id: string}
    aws_codepipeline_webhook: {
      authentication: string
      id: string
      name: string
      tags?: Record<string, string>
      target_action: string
      target_pipeline: string
      url: string
    }
    aws_wafregional_regex_pattern_set: {id: string; name: string; regex_pattern_strings?: Array<string>}
    aws_ami_copy: {
      architecture: string
      description?: string
      ena_support: boolean
      encrypted?: boolean
      id: string
      image_location: string
      kernel_id: string
      kms_key_id: string
      manage_ebs_snapshots: boolean
      name: string
      ramdisk_id: string
      root_device_name: string
      root_snapshot_id: string
      source_ami_id: string
      source_ami_region: string
      sriov_net_support: string
      tags?: Record<string, string>
      virtualization_type: string
    }
    aws_rds_cluster_instance: {
      apply_immediately: boolean
      arn: string
      auto_minor_version_upgrade?: boolean
      availability_zone: string
      ca_cert_identifier: string
      cluster_identifier: string
      copy_tags_to_snapshot?: boolean
      db_parameter_group_name: string
      db_subnet_group_name: string
      dbi_resource_id: string
      endpoint: string
      engine?: string
      engine_version: string
      id: string
      identifier: string
      identifier_prefix: string
      instance_class: string
      kms_key_id: string
      monitoring_interval?: number
      monitoring_role_arn: string
      performance_insights_enabled: boolean
      performance_insights_kms_key_id: string
      port: number
      preferred_backup_window: string
      preferred_maintenance_window: string
      promotion_tier?: number
      publicly_accessible?: boolean
      storage_encrypted: boolean
      tags?: Record<string, string>
      writer: boolean
    }
    aws_dx_connection_association: {connection_id: string; id: string; lag_id: string}
    aws_iam_account_alias: {account_alias: string; id: string}
    aws_wafv2_ip_set: {
      addresses?: Array<string>
      arn: string
      description?: string
      id: string
      ip_address_version: string
      lock_token: string
      name: string
      scope: string
      tags?: Record<string, string>
    }
    aws_glue_catalog_database: {
      catalog_id: string
      description?: string
      id: string
      location_uri?: string
      name: string
      parameters?: Record<string, string>
    }
    aws_config_configuration_recorder: {id: string; name?: string; role_arn: string}
    aws_apigatewayv2_route_response: {
      api_id: string
      id: string
      model_selection_expression?: string
      response_models?: Record<string, string>
      route_id: string
      route_response_key: string
    }
    aws_secretsmanager_secret: {
      arn: string
      description?: string
      id: string
      kms_key_id?: string
      name: string
      name_prefix: string
      policy?: string
      recovery_window_in_days?: number
      rotation_enabled: boolean
      rotation_lambda_arn?: string
      tags?: Record<string, string>
    }
    aws_config_configuration_aggregator: {arn: string; id: string; name: string; tags?: Record<string, string>}
    aws_lb_listener_certificate: {certificate_arn: string; id: string; listener_arn: string}
    aws_wafregional_sql_injection_match_set: {id: string; name: string}
    aws_glue_connection: {
      arn: string
      catalog_id: string
      connection_properties: Record<string, string>
      connection_type?: string
      description?: string
      id: string
      match_criteria?: Array<string>
      name: string
    }
    aws_elasticache_replication_group: {
      apply_immediately: boolean
      at_rest_encryption_enabled?: boolean
      auth_token?: string
      auto_minor_version_upgrade?: boolean
      automatic_failover_enabled?: boolean
      availability_zones?: Array<string>
      configuration_endpoint_address: string
      engine?: string
      engine_version: string
      id: string
      kms_key_id?: string
      maintenance_window: string
      member_clusters: Array<string>
      node_type: string
      notification_topic_arn?: string
      number_cache_clusters: number
      parameter_group_name: string
      port?: number
      primary_endpoint_address: string
      replication_group_description: string
      replication_group_id: string
      security_group_ids: Array<string>
      security_group_names: Array<string>
      snapshot_arns?: Array<string>
      snapshot_name?: string
      snapshot_retention_limit?: number
      snapshot_window: string
      subnet_group_name: string
      tags?: Record<string, string>
      transit_encryption_enabled?: boolean
    }
    aws_storagegateway_cached_iscsi_volume: {
      arn: string
      chap_enabled: boolean
      gateway_arn: string
      id: string
      lun_number: number
      network_interface_id: string
      network_interface_port: number
      snapshot_id?: string
      source_volume_arn?: string
      tags?: Record<string, string>
      target_arn: string
      target_name: string
      volume_arn: string
      volume_id: string
      volume_size_in_bytes: number
    }
    aws_network_acl: {
      egress: Array<{
        action: string
        cidr_block: string
        from_port: number
        icmp_code: number
        icmp_type: number
        ipv6_cidr_block: string
        protocol: string
        rule_no: number
        to_port: number
      }>
      id: string
      ingress: Array<{
        action: string
        cidr_block: string
        from_port: number
        icmp_code: number
        icmp_type: number
        ipv6_cidr_block: string
        protocol: string
        rule_no: number
        to_port: number
      }>
      owner_id: string
      subnet_id?: string
      subnet_ids: Array<string>
      tags?: Record<string, string>
      vpc_id: string
    }
    aws_db_security_group: {arn: string; description?: string; id: string; name: string; tags?: Record<string, string>}
    aws_pinpoint_apns_sandbox_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_pinpoint_apns_voip_channel: {
      application_id: string
      bundle_id?: string
      certificate?: string
      default_authentication_method?: string
      enabled?: boolean
      id: string
      private_key?: string
      team_id?: string
      token_key?: string
      token_key_id?: string
    }
    aws_glue_classifier: {id: string; name: string}
    aws_load_balancer_backend_server_policy: {
      id: string
      instance_port: number
      load_balancer_name: string
      policy_names?: Array<string>
    }
    aws_api_gateway_api_key: {
      arn: string
      created_date: string
      description?: string
      enabled?: boolean
      id: string
      last_updated_date: string
      name: string
      tags?: Record<string, string>
      value: string
    }
    aws_athena_named_query: {
      database: string
      description?: string
      id: string
      name: string
      query: string
      workgroup?: string
    }
    aws_dax_subnet_group: {description?: string; id: string; name: string; subnet_ids: Array<string>; vpc_id: string}
    aws_eip_association: {
      allocation_id: string
      allow_reassociation?: boolean
      id: string
      instance_id: string
      network_interface_id: string
      private_ip_address: string
      public_ip: string
    }
    aws_iam_user_group_membership: {groups: Array<string>; id: string; user: string}
    aws_wafregional_rule: {arn: string; id: string; metric_name: string; name: string; tags?: Record<string, string>}
    aws_ecr_repository_policy: {id: string; policy: string; registry_id: string; repository: string}
    aws_backup_selection: {iam_role_arn: string; id: string; name: string; plan_id: string; resources?: Array<string>}
    aws_vpn_gateway_route_propagation: {id: string; route_table_id: string; vpn_gateway_id: string}
  }
}

export type AwsProvider = Provider<ProviderConfig>

const _createProvider = createProviderFactory<AwsProvider>()
export const createProvider = (opts: Options = {}) => _createProvider(path.join(__dirname, '../.providers/aws-2.66.0'), opts)
